import { FieldValues, Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
// import Multiselect from 'multiselect-react-dropdown'
import Select from 'react-select'
import options from './Options'



const schema = z.object({
  name: z.string().min(3),
  selectors: z.any(),
  agree: z.boolean().refine((value) => value === true, {
    message: 'You must agree to the terms and conditions.',
  }),
})

type FormData = z.infer<typeof schema>;


function App() {

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);
  // const handelChanges = ( selectOptions ) =>{
  //   console.log(selectOptions);
  // } 

  return (
    <div className="app">
      <section className="vh-100">
        <div className="container py-5 h-100">
          
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-7 col-xl-6">
              <div className="card shadow">

                <div className="card-body p-5">

                     <p className='text-center fs-5 text-success mb-5'> Please enter your name and pick the Sectors you are currently involved in. </p>

                  <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-outline mb-4">
                        <label className="form-label float-start" htmlFor="name">Name:</label>
                        <input {...register("name")} type="text" id="name" className="form-control" />
                        { errors.name && ( <p className='text-danger'> {errors.name.message} </p> )}
                      </div>

                      
                      <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="selectors">Sectors:</label> 
                        
                      <Select isMulti required 

                        options={options}
                      
                      />


                  
                     {/* { errors.selectors && ( <p className='text-danger'> { errors.selectors.message } </p> )} */}
                       
                      </div>

                      <div className="form-check d-flex justify-content-start">
                        <input {...register("agree")} className="form-check-input" type="checkbox" value="" id="agree" />
                        <label className="form-check-label" htmlFor="agree"> &nbsp; Agree to terms</label>
                      </div>
                      { errors.agree && ( <p className='text-danger'> { errors.agree.message } </p> )}

                      <button className="btn btn-success float-start mt-4" type="submit">Save</button>
                    </form>

                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default App

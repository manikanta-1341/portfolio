import { createSlice } from '@reduxjs/toolkit'

const initial_State = {
    aboutCompOpen:false,
    skillsCompOpen:false,
    projectCompOpen:false,
    currentCompOpen:''
  
}

export const Slice = createSlice({
  name: 'slice',
  initialState:initial_State,
  reducers: {
    AboutComp:(state)=>{
        return{
            ...state,
            aboutCompOpen:!state.aboutCompOpen,
            //currentCompOpen:"AbortComp"
        }
    },
    SkillsComp:(state)=>{
        return{
            ...state,
            skillsCompOpen:!state.skillsCompOpen,
            //currentCompOpen:"SkillsComp"
        }
    },
    ProjectsComp:(state)=>{
        return{
            ...state,
            projectCompOpen:!state.projectCompOpen,
            //currentCompOpen:"ProjectsComp"
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
    AboutComp, 
    SkillsComp, 
    ProjectsComp,
} = Slice.actions

export default Slice.reducer
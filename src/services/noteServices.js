import axios from "axios";
import userApiConstants from "../apiConstants/userApiConstants";
let userData = JSON.parse(localStorage.getItem("userDetails"))
export async function getUserNote(){
    try{
        const response = await axios.get(process.env.REACT_APP_NOTES_URL + userApiConstants.getNotes, {
            headers: {
                Authorization:userData.id
        }});
        return response;
    }catch(err){
        throw err;
    }
}

export async function setUserNote(noteData){
    try{
        const response = await axios.post(process.env.REACT_APP_NOTES_URL + userApiConstants.setNotes,noteData,{
            headers: {
                Authorization:userData.id
        }});
        return response
    } catch(err){
        throw err
    }
}

export async function deleteRestoreUserNote(deleteRestoreData){
    try{
        const response = await axios.post(process.env.REACT_APP_NOTES_URL + userApiConstants.deleteNote,deleteRestoreData,{
            headers: {
                Authorization:userData.id
        }});
        return response
    } catch(err){
        throw err
    }
}

export async function updateUserNote(editData){
    try{
        const response = await axios.post(process.env.REACT_APP_NOTES_URL + userApiConstants.updateNotes,editData,{
            headers: {
                Authorization:userData.id
        }});
        return response
    } catch(err){
        return err
    }
}

export async function addUpdateReminderNote(addUpdateReminderdata){
    try{
        const response = await axios.post(process.env.REACT_APP_NOTES_URL + userApiConstants.addUpdateReminderNotes,addUpdateReminderdata,{
            headers: {
                Authorization:userData.id
        }});
        return response
    } catch(err){
        return err
    }
}

export async function removeReminderNote(noteID){
    try{
        let noteData = {noteIdList: [noteID]}
        const response = await axios.post(process.env.REACT_APP_NOTES_URL + userApiConstants.removeReminderNotes,noteData,{
            headers: {
                Authorization:userData.id
        }});
        return response
    } catch(err){
        return err
    }
}

export async function changesColorNotes(colordata){
    try{
        const response = await axios.post(process.env.REACT_APP_NOTES_URL + userApiConstants.changesColorNotes,colordata,{
            headers: {
                Authorization:userData.id
        }});
        return response
    } catch(err){
        return err
    }
}

export async function archiveNote(archiveData){
    try{
        const response = await axios.post(process.env.REACT_APP_NOTES_URL + userApiConstants.archiveNotes,archiveData,{
            headers: {
                Authorization:userData.id
        }});
        return response
    } catch(err){
        return err
    }
}
export async function deleteNoteForever(noteId){
    try{
        const response = await axios.post(process.env.REACT_APP_NOTES_URL + userApiConstants.deleteForeverNotes,noteId,{
            headers: {
                Authorization:userData.id
        }});
        return response
    } catch(err){
        return err
    }
}
export async function getLableList(){
    try{
        const response = await axios.get(process.env.REACT_APP_NOTES_LABLE+'/'+userApiConstants.GetNoteLabelList,{
            headers: {
                Authorization:userData.id
        }});
        return response
    } catch(err){
        return err
    }
}
export async function addNotelable(label){
    try{
        let lableData = {label:label,isDeleted:false,userId:userData.userId}
        const response = await axios.post(process.env.REACT_APP_NOTES_LABLE,lableData,{
            headers: {
                Authorization:userData.id
        }});
        return response
    } catch(err){
        return err
    }
}
export async function deleteNotelable(labelId){
    try{
        const response = await axios.delete(process.env.REACT_APP_NOTES_LABLE+'/'+labelId+'/deleteNoteLabel',{
            headers: {
                Authorization:userData.id
        }});
        return response
    } catch(err){
        return err
    }
}
export async function updateNoteLabel(labelId,editLabel){
    try{
        const response = await axios.post(process.env.REACT_APP_NOTES_LABLE+'/'+labelId+'/updateNoteLabel',editLabel,{
            headers: {
                Authorization:userData.id
        }});
        return response
    } catch(err){
        return err
    }
}
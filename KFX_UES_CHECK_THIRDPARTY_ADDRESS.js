function UES_CHECK_THIRDPARTY_ADDRESS(type)
{
	try{
		if(type =='create')
		{
			var recType = nlapiGetRecordType();
			var recId = nlapiGetRecordId();
			if(checkValidOrNot(recType) && checkValidOrNot(recId))
			{
				
					var o_customerObj = nlapiLoadRecord('customer', i_customerId);
					var s_addressStr = o_customerObj.getFieldValue('custentity_kfx_third_party_address');
					if(checkValidOrNot(s_addressStr))
					{
						nlapiSubmitField(recType,recId,'custbody_kfx_print_third_party_address','T');
					}
					rthyre6 rytrty
				}
			}
		}
	}catch(ex){
		nlapiLogExecution('debug','UES_CHECK_THIRDPARTY_ADDRESS',ex);
	}
}



function checkValidOrNot(value) {
    if ((value != null) && (value != '') && (value != undefined) && (value.toString() != 'NaN')) {
        return true;
    } else {
        return false;
    }
}

function ValueOrNot(Value) {
    if (checkValidOrNot(Value) && Value != '- None -') {
        return Value;
    } else {
        return '';
    }
}
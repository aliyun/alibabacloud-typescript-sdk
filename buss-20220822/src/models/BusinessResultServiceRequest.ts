// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BusinessResultServiceRequest extends $dara.Model {
  actionCode?: string;
  bussinessCode?: string;
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  result?: { [key: string]: any };
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      actionCode: 'ActionCode',
      bussinessCode: 'BussinessCode',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCode: 'string',
      bussinessCode: 'string',
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      success: 'boolean',
    };
  }

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


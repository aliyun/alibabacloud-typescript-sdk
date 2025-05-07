// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BusinessResultServiceShrinkRequest extends $dara.Model {
  actionCode?: string;
  bussinessCode?: string;
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  resultShrink?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      actionCode: 'ActionCode',
      bussinessCode: 'BussinessCode',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      resultShrink: 'Result',
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
      resultShrink: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


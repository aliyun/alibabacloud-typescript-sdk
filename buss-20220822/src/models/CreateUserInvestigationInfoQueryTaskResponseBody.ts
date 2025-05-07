// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateUserInvestigationInfoQueryTaskResponseBodyData } from "./CreateUserInvestigationInfoQueryTaskResponseBodyData";


export class CreateUserInvestigationInfoQueryTaskResponseBody extends $dara.Model {
  code?: string;
  data?: CreateUserInvestigationInfoQueryTaskResponseBodyData;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateUserInvestigationInfoQueryTaskResponseBodyData,
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


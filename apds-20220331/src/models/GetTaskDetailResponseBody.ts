// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTaskDetailResponseBodyData } from "./GetTaskDetailResponseBodyData";


export class GetTaskDetailResponseBody extends $dara.Model {
  data?: GetTaskDetailResponseBodyData;
  errCode?: string;
  errMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTaskDetailResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
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


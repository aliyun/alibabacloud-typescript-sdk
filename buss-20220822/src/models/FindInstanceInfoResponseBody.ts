// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FindInstanceInfoResponseBodyData } from "./FindInstanceInfoResponseBodyData";


export class FindInstanceInfoResponseBody extends $dara.Model {
  code?: string;
  count?: number;
  data?: FindInstanceInfoResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: FindInstanceInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SafeChangeStartResponseBodyData } from "./SafeChangeStartResponseBodyData";


export class SafeChangeStartResponseBody extends $dara.Model {
  code?: number;
  data?: SafeChangeStartResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: SafeChangeStartResponseBodyData,
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


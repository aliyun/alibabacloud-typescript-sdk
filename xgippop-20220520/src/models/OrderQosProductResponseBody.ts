// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OrderQosProductResponseBody extends $dara.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  rt?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      rt: 'Rt',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      rt: 'number',
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


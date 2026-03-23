// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NewJobOrderResponseBodyData extends $dara.Model {
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NewJobOrderResponseBody extends $dara.Model {
  data?: NewJobOrderResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: NewJobOrderResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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


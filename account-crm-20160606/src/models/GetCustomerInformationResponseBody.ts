// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomerInformationResponseBodyData extends $dara.Model {
  biz?: string;
  customerCategory?: string;
  website?: string;
  static names(): { [key: string]: string } {
    return {
      biz: 'Biz',
      customerCategory: 'CustomerCategory',
      website: 'Website',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: 'string',
      customerCategory: 'string',
      website: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInformationResponseBody extends $dara.Model {
  code?: string;
  data?: GetCustomerInformationResponseBodyData;
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
      code: 'string',
      data: GetCustomerInformationResponseBodyData,
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


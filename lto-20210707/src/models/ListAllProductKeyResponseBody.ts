// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllProductKeyResponseBodyData extends $dara.Model {
  name?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      productKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllProductKeyResponseBody extends $dara.Model {
  code?: string;
  data?: ListAllProductKeyResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAllProductKeyResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


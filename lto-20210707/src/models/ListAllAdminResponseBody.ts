// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllAdminResponseBodyData extends $dara.Model {
  adminId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      adminId: 'AdminId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllAdminResponseBody extends $dara.Model {
  code?: string;
  data?: ListAllAdminResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListAllAdminResponseBodyData },
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


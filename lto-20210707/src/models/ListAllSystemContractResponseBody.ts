// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllSystemContractResponseBodyData extends $dara.Model {
  name?: string;
  systemContractId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      systemContractId: 'SystemContractId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      systemContractId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllSystemContractResponseBody extends $dara.Model {
  code?: string;
  data?: ListAllSystemContractResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListAllSystemContractResponseBodyData },
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


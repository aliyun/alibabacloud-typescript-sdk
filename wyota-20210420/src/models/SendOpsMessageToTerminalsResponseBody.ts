// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendOpsMessageToTerminalsResponseBodyData extends $dara.Model {
  failReason?: string;
  result?: string;
  serialNumber?: string;
  success?: boolean;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      failReason: 'FailReason',
      result: 'Result',
      serialNumber: 'SerialNumber',
      success: 'Success',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failReason: 'string',
      result: 'string',
      serialNumber: 'string',
      success: 'boolean',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendOpsMessageToTerminalsResponseBody extends $dara.Model {
  code?: string;
  data?: SendOpsMessageToTerminalsResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': SendOpsMessageToTerminalsResponseBodyData },
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


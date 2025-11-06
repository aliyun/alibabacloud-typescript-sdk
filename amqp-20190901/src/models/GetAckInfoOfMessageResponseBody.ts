// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAckInfoOfMessageResponseBodyData extends $dara.Model {
  ackErrorInfo?: string;
  ackResult?: string;
  action?: string;
  code?: string;
  property?: { [key: string]: any };
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      ackErrorInfo: 'AckErrorInfo',
      ackResult: 'AckResult',
      action: 'Action',
      code: 'Code',
      property: 'Property',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ackErrorInfo: 'string',
      ackResult: 'string',
      action: 'string',
      code: 'string',
      property: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      timeStamp: 'string',
    };
  }

  validate() {
    if(this.property) {
      $dara.Model.validateMap(this.property);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAckInfoOfMessageResponseBody extends $dara.Model {
  code?: number;
  data?: GetAckInfoOfMessageResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': GetAckInfoOfMessageResponseBodyData },
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


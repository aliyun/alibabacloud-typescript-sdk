// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ExecuteAcpCommandResponseBodyData extends $dara.Model {
  id?: string;
  jsonrpc?: string;
  requestId?: string;
  result?: { [key: string]: any };
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      jsonrpc: 'jsonrpc',
      requestId: 'requestId',
      result: 'result',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      jsonrpc: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      timestamp: 'number',
    };
  }

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAcpCommandResponseBody extends $dara.Model {
  code?: string;
  data?: ExecuteAcpCommandResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ExecuteAcpCommandResponseBodyData,
      message: 'string',
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


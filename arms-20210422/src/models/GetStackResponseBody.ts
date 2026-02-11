// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackResponseBodyStackInfoExtInfo extends $dara.Model {
  info?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyStackInfo extends $dara.Model {
  api?: string;
  duration?: number;
  exception?: string;
  extInfo?: GetStackResponseBodyStackInfoExtInfo;
  line?: string;
  rpcId?: string;
  serviceName?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
      duration: 'Duration',
      exception: 'Exception',
      extInfo: 'ExtInfo',
      line: 'Line',
      rpcId: 'RpcId',
      serviceName: 'ServiceName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: 'string',
      duration: 'number',
      exception: 'string',
      extInfo: GetStackResponseBodyStackInfoExtInfo,
      line: 'string',
      rpcId: 'string',
      serviceName: 'string',
      startTime: 'number',
    };
  }

  validate() {
    if(this.extInfo && typeof (this.extInfo as any).validate === 'function') {
      (this.extInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBody extends $dara.Model {
  requestId?: string;
  stackInfo?: GetStackResponseBodyStackInfo[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackInfo: 'StackInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackInfo: { 'type': 'array', 'itemType': GetStackResponseBodyStackInfo },
    };
  }

  validate() {
    if(Array.isArray(this.stackInfo)) {
      $dara.Model.validateArray(this.stackInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


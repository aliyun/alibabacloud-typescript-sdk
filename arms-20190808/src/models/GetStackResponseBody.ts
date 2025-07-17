// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackResponseBodyStackInfoExtInfo extends $dara.Model {
  /**
   * @remarks
   * The content of the custom parameter.
   * 
   * @example
   * input=254275&amp;
   */
  info?: string;
  /**
   * @remarks
   * The type of the custom parameter.
   * 
   * @example
   * 41
   */
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
  /**
   * @remarks
   * The name of the operation.
   * 
   * @example
   * Tomcat Servlet Process
   */
  api?: string;
  /**
   * @remarks
   * The number of times the method is called.
   * 
   * @example
   * 1
   */
  callCount?: string;
  /**
   * @remarks
   * The duration. Unit: milliseconds.
   * 
   * @example
   * 32
   */
  duration?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * java.lang.NullPointerException
   */
  exception?: string;
  /**
   * @remarks
   * The information about the array object.
   */
  extInfo?: GetStackResponseBodyStackInfoExtInfo;
  /**
   * @remarks
   * The number of rows in the method stack information.
   * 
   * @example
   * 34
   */
  line?: string;
  /**
   * @remarks
   * The ID of the RPC mode.
   * 
   * @example
   * 0.1
   */
  rpcId?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * /com/test
   */
  serviceName?: string;
  /**
   * @remarks
   * The start time of the call method.
   * 
   * @example
   * 1653555396
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
      callCount: 'CallCount',
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
      callCount: 'string',
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B34C3A43-A901-5F94-9DAD-758CE4******
   */
  requestId?: string;
  /**
   * @remarks
   * The method stack details.
   */
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceFuncStatusResponseBodyDataArgs extends $dara.Model {
  /**
   * @remarks
   * The configuration process.
   * 
   * @example
   * java
   */
  addCmd?: string;
  /**
   * @remarks
   * The ONCPU tracing switch.
   * 
   * @example
   * true
   */
  cpu?: string;
  /**
   * @remarks
   * The storage path.
   * 
   * @example
   * /tmp/sysom/java-profiler
   */
  javaStorePath?: string;
  /**
   * @remarks
   * The lock tracing switch.
   * 
   * @example
   * true
   */
  locks?: string;
  /**
   * @remarks
   * The tracing cycle.
   * 
   * @example
   * -1
   */
  loop?: number;
  /**
   * @remarks
   * The memory tracing switch.
   * 
   * @example
   * true
   */
  mem?: string;
  /**
   * @remarks
   * The system profiling switch.
   * 
   * @example
   * true
   */
  systemProfiling?: string;
  static names(): { [key: string]: string } {
    return {
      addCmd: 'add_cmd',
      cpu: 'cpu',
      javaStorePath: 'java_store_path',
      locks: 'locks',
      loop: 'loop',
      mem: 'mem',
      systemProfiling: 'system_profiling',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addCmd: 'string',
      cpu: 'string',
      javaStorePath: 'string',
      locks: 'string',
      loop: 'number',
      mem: 'string',
      systemProfiling: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceFuncStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The configuration parameters.
   */
  args?: GetServiceFuncStatusResponseBodyDataArgs;
  static names(): { [key: string]: string } {
    return {
      args: 'args',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: GetServiceFuncStatusResponseBodyDataArgs,
    };
  }

  validate() {
    if(this.args && typeof (this.args as any).validate === 'function') {
      (this.args as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceFuncStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * - `code == Success` indicates that the authorization is successful.
   * - Other status codes indicate that the authorization failed. Check the `message` field for the detailed fault information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: GetServiceFuncStatusResponseBodyData;
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the request error information.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
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
      data: GetServiceFuncStatusResponseBodyData,
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


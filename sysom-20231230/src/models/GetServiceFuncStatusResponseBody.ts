// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceFuncStatusResponseBodyDataArgs extends $dara.Model {
  /**
   * @remarks
   * Configuration process
   * 
   * @example
   * java
   */
  addCmd?: string;
  /**
   * @remarks
   * ONCPU tracing Toggle
   * 
   * @example
   * true
   */
  cpu?: string;
  /**
   * @remarks
   * Storage Path
   * 
   * @example
   * /tmp/sysom/java-profiler
   */
  javaStorePath?: string;
  /**
   * @remarks
   * Edit Lock tracing Toggle
   * 
   * @example
   * true
   */
  locks?: string;
  /**
   * @remarks
   * Tracing epoch
   * 
   * @example
   * -1
   */
  loop?: number;
  /**
   * @remarks
   * Memory tracing Toggle
   * 
   * @example
   * true
   */
  mem?: string;
  /**
   * @remarks
   * System profiling Toggle
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
   * Configuration Parameter
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
   * Status code  
   * - `code == Success` indicates that authorization succeeded.  
   * - Any other status code indicates that authorization failed. When authorization fails, view the `message` field to obtain detailed error message.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Return Result
   */
  data?: GetServiceFuncStatusResponseBodyData;
  /**
   * @remarks
   * error message  
   * - If `code == Success`, this field is empty;  
   * - Otherwise, this field contains the request error message.
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


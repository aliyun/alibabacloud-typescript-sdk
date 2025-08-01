// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceFuncStatusResponseBodyDataArgs extends $dara.Model {
  /**
   * @example
   * java
   */
  addCmd?: string;
  /**
   * @example
   * true
   */
  cpu?: string;
  /**
   * @example
   * /tmp/sysom/java-profiler
   */
  javaStorePath?: string;
  /**
   * @example
   * true
   */
  locks?: string;
  /**
   * @example
   * -1
   */
  loop?: number;
  /**
   * @example
   * true
   */
  mem?: string;
  /**
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
   * @example
   * Success
   */
  code?: string;
  data?: GetServiceFuncStatusResponseBodyData;
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


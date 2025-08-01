// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFuncSwitchRecordRequestParamsArgs extends $dara.Model {
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
  duration?: number;
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
  pid?: number;
  /**
   * @example
   * true
   */
  systemProfiling?: string;
  static names(): { [key: string]: string } {
    return {
      addCmd: 'add_cmd',
      cpu: 'cpu',
      duration: 'duration',
      javaStorePath: 'java_store_path',
      locks: 'locks',
      loop: 'loop',
      mem: 'mem',
      pid: 'pid',
      systemProfiling: 'system_profiling',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addCmd: 'string',
      cpu: 'string',
      duration: 'number',
      javaStorePath: 'string',
      locks: 'string',
      loop: 'number',
      mem: 'string',
      pid: 'number',
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

export class UpdateFuncSwitchRecordRequestParams extends $dara.Model {
  args?: UpdateFuncSwitchRecordRequestParamsArgs;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mullprof
   */
  functionName?: string;
  /**
   * @example
   * i-2zei55fwj8nnu31h3z46
   */
  instance?: string;
  /**
   * @example
   * restart
   */
  op?: string;
  region?: string;
  /**
   * @example
   * 1664516888213680
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'args',
      functionName: 'function_name',
      instance: 'instance',
      op: 'op',
      region: 'region',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: UpdateFuncSwitchRecordRequestParamsArgs,
      functionName: 'string',
      instance: 'string',
      op: 'string',
      region: 'string',
      uid: 'string',
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

export class UpdateFuncSwitchRecordRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  channel?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  params?: UpdateFuncSwitchRecordRequestParams;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * livetrace
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      params: 'params',
      serviceName: 'service_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      params: UpdateFuncSwitchRecordRequestParams,
      serviceName: 'string',
    };
  }

  validate() {
    if(this.params && typeof (this.params as any).validate === 'function') {
      (this.params as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


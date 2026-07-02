// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFuncSwitchRecordRequestParamsArgs extends $dara.Model {
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
   * The start duration, in seconds (s).
   * 
   * @example
   * 3600
   */
  duration?: number;
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
   * The process PID.
   * 
   * @example
   * 1243
   */
  pid?: number;
  /**
   * @remarks
   * The system tracing switch.
   * 
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
  /**
   * @remarks
   * The configuration parameters.
   */
  args?: UpdateFuncSwitchRecordRequestParamsArgs;
  /**
   * @remarks
   * The feature name.
   * 
   * This parameter is required.
   * 
   * @example
   * mullprof
   */
  functionName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-2zei55fwj8nnu31h3z46
   */
  instance?: string;
  /**
   * @remarks
   * The operation type.
   * 
   * @example
   * restart
   */
  op?: string;
  /**
   * @remarks
   * The region to which the instance belongs. All instance IDs passed in instances must belong to the same region.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The user ID.
   * 
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
   * The diagnostic channel. Currently, this parameter is fixed to the ECS channel.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  channel?: string;
  /**
   * @remarks
   * The diagnostic parameters. Different types of diagnostics require different diagnostic parameters. You can use this field to filter records whose parameters match the specified values.
   * 
   * This parameter is required.
   */
  params?: UpdateFuncSwitchRecordRequestParams;
  /**
   * @remarks
   * The service name.
   * 
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


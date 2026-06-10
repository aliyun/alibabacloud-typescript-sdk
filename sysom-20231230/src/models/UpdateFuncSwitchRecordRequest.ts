// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFuncSwitchRecordRequestParamsArgs extends $dara.Model {
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
   * Duration in seconds (s)
   * 
   * @example
   * 3600
   */
  duration?: number;
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
   * Process PID
   * 
   * @example
   * 1243
   */
  pid?: number;
  /**
   * @remarks
   * System tracing toggle
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
   * Configuration Parameter
   */
  args?: UpdateFuncSwitchRecordRequestParamsArgs;
  /**
   * @remarks
   * Feature Name
   * 
   * This parameter is required.
   * 
   * @example
   * mullprof
   */
  functionName?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * i-2zei55fwj8nnu31h3z46
   */
  instance?: string;
  /**
   * @remarks
   * Operation Type
   * 
   * @example
   * restart
   */
  op?: string;
  /**
   * @remarks
   * Region to which the instance belongs. Ensure that all instance IDs passed in the instances field belong to the same region.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * User ID
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
   * Diagnosis channel (currently fixed to the ecs channel)
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  channel?: string;
  /**
   * @remarks
   * Diagnosis parameters. Different diagnosis types require different diagnosis parameters. You can use this field to filter records whose parameters match specified values.
   * 
   * This parameter is required.
   */
  params?: UpdateFuncSwitchRecordRequestParams;
  /**
   * @remarks
   * Service Name
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


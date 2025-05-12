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


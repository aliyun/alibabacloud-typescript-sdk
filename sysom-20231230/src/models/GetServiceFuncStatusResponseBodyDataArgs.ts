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


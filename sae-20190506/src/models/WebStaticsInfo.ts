// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebStaticsInfo extends $dara.Model {
  /**
   * @remarks
   * CPU usage
   * 
   * @example
   * 1327
   */
  cpuUsage?: number;
  /**
   * @remarks
   * Indicates outbound traffic.
   * 
   * @example
   * 2792
   */
  internetTrafficOut?: number;
  /**
   * @remarks
   * The number of times that the SQL statement is invoked.
   * 
   * @example
   * 2
   */
  invocations?: number;
  /**
   * @remarks
   * The peak memory usage for the query.
   * 
   * @example
   * 5045929297920
   */
  memoryUsage?: number;
  static names(): { [key: string]: string } {
    return {
      cpuUsage: 'CpuUsage',
      internetTrafficOut: 'InternetTrafficOut',
      invocations: 'Invocations',
      memoryUsage: 'MemoryUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuUsage: 'number',
      internetTrafficOut: 'number',
      invocations: 'number',
      memoryUsage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


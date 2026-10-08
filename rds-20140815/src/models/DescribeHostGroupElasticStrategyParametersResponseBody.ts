// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHostGroupElasticStrategyParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current CPU utilization of the instance. Unit: %.
   * 
   * @example
   * 20
   */
  cpuShar?: number;
  /**
   * @remarks
   * The CPU usage of the instance. Unit: cores.
   * 
   * @example
   * 4
   */
  cpuZoom?: number;
  /**
   * @remarks
   * The number of I/O requests.
   * 
   * @example
   * 10
   */
  iopsZoom?: number;
  /**
   * @remarks
   * The maximum number of concurrent connections for the instance type.
   * 
   * @example
   * 30
   */
  maxConnZoom?: number;
  /**
   * @remarks
   * The total memory of instances in the current dedicated cluster. Unit: MB.
   * 
   * @example
   * 1000
   */
  memoryZoom?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 60F9A12A-16B8-4728-B099-4CA38D32C31C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cpuShar: 'CpuShar',
      cpuZoom: 'CpuZoom',
      iopsZoom: 'IopsZoom',
      maxConnZoom: 'MaxConnZoom',
      memoryZoom: 'MemoryZoom',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuShar: 'number',
      cpuZoom: 'number',
      iopsZoom: 'number',
      maxConnZoom: 'number',
      memoryZoom: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


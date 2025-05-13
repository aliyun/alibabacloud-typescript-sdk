// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadSchedulerxDesignateDetailResponseBodyDataDesignateDetailVosMetrics extends $dara.Model {
  /**
   * @example
   * 0
   */
  cpuLoad1?: number;
  /**
   * @example
   * 0
   */
  cpuLoad5?: number;
  /**
   * @example
   * 1
   */
  cpuProcessors?: number;
  /**
   * @example
   * 1024
   */
  diskMax?: number;
  /**
   * @example
   * 0.19142496008515167
   */
  diskUsage?: number;
  /**
   * @example
   * 0.14865875
   */
  diskUsed?: number;
  /**
   * @example
   * 56
   */
  execCount?: number;
  /**
   * @example
   * 0.06072874493927125
   */
  heap1Usage?: number;
  /**
   * @example
   * 14
   */
  heap1Used?: number;
  /**
   * @example
   * 0.06477732793522267
   */
  heap5Usage?: number;
  /**
   * @example
   * 500
   */
  heapMax?: number;
  /**
   * @example
   * 72
   */
  sharePoolAvailableSize?: number;
  /**
   * @example
   * 1
   */
  sharePoolQueueSize?: number;
  static names(): { [key: string]: string } {
    return {
      cpuLoad1: 'CpuLoad1',
      cpuLoad5: 'CpuLoad5',
      cpuProcessors: 'CpuProcessors',
      diskMax: 'DiskMax',
      diskUsage: 'DiskUsage',
      diskUsed: 'DiskUsed',
      execCount: 'ExecCount',
      heap1Usage: 'Heap1Usage',
      heap1Used: 'Heap1Used',
      heap5Usage: 'Heap5Usage',
      heapMax: 'HeapMax',
      sharePoolAvailableSize: 'SharePoolAvailableSize',
      sharePoolQueueSize: 'SharePoolQueueSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuLoad1: 'number',
      cpuLoad5: 'number',
      cpuProcessors: 'number',
      diskMax: 'number',
      diskUsage: 'number',
      diskUsed: 'number',
      execCount: 'number',
      heap1Usage: 'number',
      heap1Used: 'number',
      heap5Usage: 'number',
      heapMax: 'number',
      sharePoolAvailableSize: 'number',
      sharePoolQueueSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


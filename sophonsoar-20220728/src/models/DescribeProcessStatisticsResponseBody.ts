// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessStatisticsResponseBodyMetrics extends $dara.Model {
  /**
   * @remarks
   * The number of blocked files.
   * 
   * @example
   * 1
   */
  banFileNum?: number;
  /**
   * @remarks
   * The number of blocked IP addresses.
   * 
   * @example
   * 1
   */
  banIpNum?: number;
  /**
   * @remarks
   * The number of blocked processes.
   * 
   * @example
   * 1
   */
  banProcessNum?: number;
  /**
   * @remarks
   * The number of handling tasks.
   * 
   * @example
   * 1
   */
  taskNum?: number;
  static names(): { [key: string]: string } {
    return {
      banFileNum: 'BanFileNum',
      banIpNum: 'BanIpNum',
      banProcessNum: 'BanProcessNum',
      taskNum: 'TaskNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      banFileNum: 'number',
      banIpNum: 'number',
      banProcessNum: 'number',
      taskNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  metrics?: DescribeProcessStatisticsResponseBodyMetrics;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4CFC0F8A-D600-5FFF-A0DF-3121C4C1B90F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: DescribeProcessStatisticsResponseBodyMetrics,
      requestId: 'string',
    };
  }

  validate() {
    if(this.metrics && typeof (this.metrics as any).validate === 'function') {
      (this.metrics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreIncrDetailResponseBodyRestoreIncrDetail extends $dara.Model {
  /**
   * @example
   * 2020-11-05T06:45:44Z
   */
  endTime?: string;
  /**
   * @example
   * 0/0
   */
  process?: string;
  /**
   * @example
   * 0 ms
   */
  restoreDelay?: string;
  /**
   * @example
   * 2020-11-02T18:00:00Z
   */
  restoreStartTs?: string;
  /**
   * @example
   * \\"\\"
   */
  restoredTs?: string;
  /**
   * @example
   * 2020-11-05T06:45:44Z
   */
  startTime?: string;
  /**
   * @example
   * SUCCEEDED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      process: 'Process',
      restoreDelay: 'RestoreDelay',
      restoreStartTs: 'RestoreStartTs',
      restoredTs: 'RestoredTs',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      process: 'string',
      restoreDelay: 'string',
      restoreStartTs: 'string',
      restoredTs: 'string',
      startTime: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreIncrDetailResponseBody extends $dara.Model {
  /**
   * @example
   * D0FE2717-E194-465A-B27B-7373F96E580B
   */
  requestId?: string;
  restoreIncrDetail?: DescribeRestoreIncrDetailResponseBodyRestoreIncrDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      restoreIncrDetail: 'RestoreIncrDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      restoreIncrDetail: DescribeRestoreIncrDetailResponseBodyRestoreIncrDetail,
    };
  }

  validate() {
    if(this.restoreIncrDetail && typeof (this.restoreIncrDetail as any).validate === 'function') {
      (this.restoreIncrDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


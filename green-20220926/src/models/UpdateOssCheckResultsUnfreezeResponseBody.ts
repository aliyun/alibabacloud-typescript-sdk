// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOssCheckResultsUnfreezeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of invalid records.
   * 
   * @example
   * 1
   */
  invalidCount?: number;
  /**
   * @remarks
   * The number of duplicate records.
   * 
   * @example
   * 1
   */
  repeatCount?: number;
  /**
   * @remarks
   * The number of successful records.
   * 
   * @example
   * 8
   */
  successCount?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      invalidCount: 'InvalidCount',
      repeatCount: 'RepeatCount',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalidCount: 'number',
      repeatCount: 'number',
      successCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOssCheckResultsUnfreezeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: UpdateOssCheckResultsUnfreezeResponseBodyData;
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateOssCheckResultsUnfreezeResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


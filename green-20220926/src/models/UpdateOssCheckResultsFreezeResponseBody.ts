// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOssCheckResultsFreezeResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  invalidCount?: number;
  /**
   * @example
   * 1
   */
  repeatCount?: number;
  /**
   * @example
   * 5
   */
  successCount?: number;
  /**
   * @example
   * 5
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

export class UpdateOssCheckResultsFreezeResponseBody extends $dara.Model {
  data?: UpdateOssCheckResultsFreezeResponseBodyData;
  /**
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
      data: UpdateOssCheckResultsFreezeResponseBodyData,
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


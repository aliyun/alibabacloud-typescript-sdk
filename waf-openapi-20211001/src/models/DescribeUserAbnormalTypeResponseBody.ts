// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserAbnormalTypeResponseBodyAbnormal } from "./DescribeUserAbnormalTypeResponseBodyAbnormal";


export class DescribeUserAbnormalTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The types and statistics of risks.
   */
  abnormal?: DescribeUserAbnormalTypeResponseBodyAbnormal[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3E1CB966-1407-5988-9432-7***D784
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      abnormal: 'Abnormal',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormal: { 'type': 'array', 'itemType': DescribeUserAbnormalTypeResponseBodyAbnormal },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.abnormal)) {
      $dara.Model.validateArray(this.abnormal);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


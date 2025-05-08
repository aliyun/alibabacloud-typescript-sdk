// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetOssUsageDataResponseBodyUsageList } from "./GetOssUsageDataResponseBodyUsageList";


export class GetOssUsageDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2A8CCD48-14F9-0309-B957-7B1D74A8119D
   */
  requestId?: string;
  /**
   * @remarks
   * The array of usage data.
   */
  usageList?: GetOssUsageDataResponseBodyUsageList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageList: 'UsageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageList: { 'type': 'array', 'itemType': GetOssUsageDataResponseBodyUsageList },
    };
  }

  validate() {
    if(Array.isArray(this.usageList)) {
      $dara.Model.validateArray(this.usageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


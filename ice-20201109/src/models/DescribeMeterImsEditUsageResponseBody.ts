// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMeterImsEditUsageResponseBodyData } from "./DescribeMeterImsEditUsageResponseBodyData";


export class DescribeMeterImsEditUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The usage statistics of IMS on VOD editing.
   */
  data?: DescribeMeterImsEditUsageResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7F3AE2C6-5CC6-5712-BAC5-5A735A157687
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
      data: { 'type': 'array', 'itemType': DescribeMeterImsEditUsageResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


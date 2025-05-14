// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMeterImsMediaConvertUHDUsageResponseBodyData } from "./DescribeMeterImsMediaConvertUhdusageResponseBodyData";


export class DescribeMeterImsMediaConvertUHDUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The usage statistics of IMS on UHD transcoding of MPS.
   */
  data?: DescribeMeterImsMediaConvertUHDUsageResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA98A0C-7870-15FE-B96F-8880BB600A2C
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
      data: { 'type': 'array', 'itemType': DescribeMeterImsMediaConvertUHDUsageResponseBodyData },
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


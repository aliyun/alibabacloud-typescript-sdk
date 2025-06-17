// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBlockedRegionsResponseBodyInfoList } from "./DescribeBlockedRegionsResponseBodyInfoList";


export class DescribeBlockedRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information returned.
   */
  infoList?: DescribeBlockedRegionsResponseBodyInfoList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BFFCDFAD-DACC-484E-9BE6-0AF3B3A0DD23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      infoList: 'InfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoList: DescribeBlockedRegionsResponseBodyInfoList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.infoList && typeof (this.infoList as any).validate === 'function') {
      (this.infoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


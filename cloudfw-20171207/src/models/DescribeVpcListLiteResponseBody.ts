// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcListLiteResponseBodyVpcList } from "./DescribeVpcListLiteResponseBodyVpcList";


export class DescribeVpcListLiteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 55E56A55-D93A-5614-AE00-BE2F8077F891
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the VPCs.
   */
  vpcList?: DescribeVpcListLiteResponseBodyVpcList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpcList: 'VpcList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpcList: { 'type': 'array', 'itemType': DescribeVpcListLiteResponseBodyVpcList },
    };
  }

  validate() {
    if(Array.isArray(this.vpcList)) {
      $dara.Model.validateArray(this.vpcList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


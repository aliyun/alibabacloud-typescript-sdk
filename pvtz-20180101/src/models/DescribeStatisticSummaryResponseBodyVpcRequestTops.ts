// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeStatisticSummaryResponseBodyVpcRequestTopsVpcRequestTop } from "./DescribeStatisticSummaryResponseBodyVpcRequestTopsVpcRequestTop";


export class DescribeStatisticSummaryResponseBodyVpcRequestTops extends $dara.Model {
  vpcRequestTop?: DescribeStatisticSummaryResponseBodyVpcRequestTopsVpcRequestTop[];
  static names(): { [key: string]: string } {
    return {
      vpcRequestTop: 'VpcRequestTop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcRequestTop: { 'type': 'array', 'itemType': DescribeStatisticSummaryResponseBodyVpcRequestTopsVpcRequestTop },
    };
  }

  validate() {
    if(Array.isArray(this.vpcRequestTop)) {
      $dara.Model.validateArray(this.vpcRequestTop);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


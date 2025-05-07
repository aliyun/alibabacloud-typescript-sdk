// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCSecurityGroupListResponseBodyRCSecurityGroups } from "./DescribeRcsecurityGroupListResponseBodyRcsecurityGroups";


export class DescribeRCSecurityGroupListResponseBody extends $dara.Model {
  RCSecurityGroups?: DescribeRCSecurityGroupListResponseBodyRCSecurityGroups[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      RCSecurityGroups: 'RCSecurityGroups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RCSecurityGroups: { 'type': 'array', 'itemType': DescribeRCSecurityGroupListResponseBodyRCSecurityGroups },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.RCSecurityGroups)) {
      $dara.Model.validateArray(this.RCSecurityGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


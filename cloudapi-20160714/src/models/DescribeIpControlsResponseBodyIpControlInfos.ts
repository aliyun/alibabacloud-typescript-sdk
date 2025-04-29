// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIpControlsResponseBodyIpControlInfosIpControlInfo } from "./DescribeIpControlsResponseBodyIpControlInfosIpControlInfo";


export class DescribeIpControlsResponseBodyIpControlInfos extends $dara.Model {
  ipControlInfo?: DescribeIpControlsResponseBodyIpControlInfosIpControlInfo[];
  static names(): { [key: string]: string } {
    return {
      ipControlInfo: 'IpControlInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipControlInfo: { 'type': 'array', 'itemType': DescribeIpControlsResponseBodyIpControlInfosIpControlInfo },
    };
  }

  validate() {
    if(Array.isArray(this.ipControlInfo)) {
      $dara.Model.validateArray(this.ipControlInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


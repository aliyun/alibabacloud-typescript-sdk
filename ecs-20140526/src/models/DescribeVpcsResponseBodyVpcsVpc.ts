// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcsResponseBodyVpcsVpcUserCidrs } from "./DescribeVpcsResponseBodyVpcsVpcUserCidrs";
import { DescribeVpcsResponseBodyVpcsVpcVSwitchIds } from "./DescribeVpcsResponseBodyVpcsVpcVswitchIds";


export class DescribeVpcsResponseBodyVpcsVpc extends $dara.Model {
  cidrBlock?: string;
  creationTime?: string;
  description?: string;
  isDefault?: boolean;
  regionId?: string;
  status?: string;
  userCidrs?: DescribeVpcsResponseBodyVpcsVpcUserCidrs;
  VRouterId?: string;
  vSwitchIds?: DescribeVpcsResponseBodyVpcsVpcVSwitchIds;
  vpcId?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      creationTime: 'CreationTime',
      description: 'Description',
      isDefault: 'IsDefault',
      regionId: 'RegionId',
      status: 'Status',
      userCidrs: 'UserCidrs',
      VRouterId: 'VRouterId',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      creationTime: 'string',
      description: 'string',
      isDefault: 'boolean',
      regionId: 'string',
      status: 'string',
      userCidrs: DescribeVpcsResponseBodyVpcsVpcUserCidrs,
      VRouterId: 'string',
      vSwitchIds: DescribeVpcsResponseBodyVpcsVpcVSwitchIds,
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    if(this.userCidrs && typeof (this.userCidrs as any).validate === 'function') {
      (this.userCidrs as any).validate();
    }
    if(this.vSwitchIds && typeof (this.vSwitchIds as any).validate === 'function') {
      (this.vSwitchIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


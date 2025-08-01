// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcsResponseBodyVpcsVpcUserCidrs extends $dara.Model {
  userCidr?: string[];
  static names(): { [key: string]: string } {
    return {
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userCidr: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userCidr)) {
      $dara.Model.validateArray(this.userCidr);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponseBodyVpcsVpcVSwitchIds extends $dara.Model {
  vSwitchId?: string[];
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchId)) {
      $dara.Model.validateArray(this.vSwitchId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeVpcsResponseBodyVpcs extends $dara.Model {
  vpc?: DescribeVpcsResponseBodyVpcsVpc[];
  static names(): { [key: string]: string } {
    return {
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpc: { 'type': 'array', 'itemType': DescribeVpcsResponseBodyVpcsVpc },
    };
  }

  validate() {
    if(Array.isArray(this.vpc)) {
      $dara.Model.validateArray(this.vpc);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponseBody extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  vpcs?: DescribeVpcsResponseBodyVpcs;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcs: 'Vpcs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vpcs: DescribeVpcsResponseBodyVpcs,
    };
  }

  validate() {
    if(this.vpcs && typeof (this.vpcs as any).validate === 'function') {
      (this.vpcs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


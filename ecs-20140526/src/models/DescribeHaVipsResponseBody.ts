// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHaVipsResponseBodyHaVipsHaVipAssociatedEipAddresses extends $dara.Model {
  associatedEipAddresse?: string[];
  static names(): { [key: string]: string } {
    return {
      associatedEipAddresse: 'associatedEipAddresse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedEipAddresse: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.associatedEipAddresse)) {
      $dara.Model.validateArray(this.associatedEipAddresse);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsResponseBodyHaVipsHaVipAssociatedInstances extends $dara.Model {
  associatedInstance?: string[];
  static names(): { [key: string]: string } {
    return {
      associatedInstance: 'associatedInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedInstance: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.associatedInstance)) {
      $dara.Model.validateArray(this.associatedInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsResponseBodyHaVipsHaVip extends $dara.Model {
  associatedEipAddresses?: DescribeHaVipsResponseBodyHaVipsHaVipAssociatedEipAddresses;
  associatedInstances?: DescribeHaVipsResponseBodyHaVipsHaVipAssociatedInstances;
  createTime?: string;
  description?: string;
  haVipId?: string;
  ipAddress?: string;
  masterInstanceId?: string;
  regionId?: string;
  status?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      associatedEipAddresses: 'AssociatedEipAddresses',
      associatedInstances: 'AssociatedInstances',
      createTime: 'CreateTime',
      description: 'Description',
      haVipId: 'HaVipId',
      ipAddress: 'IpAddress',
      masterInstanceId: 'MasterInstanceId',
      regionId: 'RegionId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedEipAddresses: DescribeHaVipsResponseBodyHaVipsHaVipAssociatedEipAddresses,
      associatedInstances: DescribeHaVipsResponseBodyHaVipsHaVipAssociatedInstances,
      createTime: 'string',
      description: 'string',
      haVipId: 'string',
      ipAddress: 'string',
      masterInstanceId: 'string',
      regionId: 'string',
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.associatedEipAddresses && typeof (this.associatedEipAddresses as any).validate === 'function') {
      (this.associatedEipAddresses as any).validate();
    }
    if(this.associatedInstances && typeof (this.associatedInstances as any).validate === 'function') {
      (this.associatedInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsResponseBodyHaVips extends $dara.Model {
  haVip?: DescribeHaVipsResponseBodyHaVipsHaVip[];
  static names(): { [key: string]: string } {
    return {
      haVip: 'HaVip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haVip: { 'type': 'array', 'itemType': DescribeHaVipsResponseBodyHaVipsHaVip },
    };
  }

  validate() {
    if(Array.isArray(this.haVip)) {
      $dara.Model.validateArray(this.haVip);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsResponseBody extends $dara.Model {
  haVips?: DescribeHaVipsResponseBodyHaVips;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      haVips: 'HaVips',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haVips: DescribeHaVipsResponseBodyHaVips,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.haVips && typeof (this.haVips as any).validate === 'function') {
      (this.haVips as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTagsTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTags extends $dara.Model {
  tag?: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTrNetworkConfigRegionBindingListRegionBinding extends $dara.Model {
  cidrBlock?: string;
  regionId?: string;
  relayCidrBlock?: string;
  status?: string;
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      regionId: 'RegionId',
      relayCidrBlock: 'RelayCidrBlock',
      status: 'Status',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      regionId: 'string',
      relayCidrBlock: 'string',
      status: 'string',
      transitRouterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTrNetworkConfigRegionBindingList extends $dara.Model {
  regionBinding?: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTrNetworkConfigRegionBindingListRegionBinding[];
  static names(): { [key: string]: string } {
    return {
      regionBinding: 'RegionBinding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionBinding: { 'type': 'array', 'itemType': DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTrNetworkConfigRegionBindingListRegionBinding },
    };
  }

  validate() {
    if(Array.isArray(this.regionBinding)) {
      $dara.Model.validateArray(this.regionBinding);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTrNetworkConfig extends $dara.Model {
  cidrAllocationMode?: string;
  regionBindingList?: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTrNetworkConfigRegionBindingList;
  subnet?: string;
  static names(): { [key: string]: string } {
    return {
      cidrAllocationMode: 'CidrAllocationMode',
      regionBindingList: 'RegionBindingList',
      subnet: 'Subnet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrAllocationMode: 'string',
      regionBindingList: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTrNetworkConfigRegionBindingList,
      subnet: 'string',
    };
  }

  validate() {
    if(this.regionBindingList && typeof (this.regionBindingList as any).validate === 'function') {
      (this.regionBindingList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkVpcNetworkConfigRegionBindingListRegionBinding extends $dara.Model {
  regionId?: string;
  relayCidrBlock?: string;
  status?: string;
  vpcCidrBlock?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      relayCidrBlock: 'RelayCidrBlock',
      status: 'Status',
      vpcCidrBlock: 'VpcCidrBlock',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      relayCidrBlock: 'string',
      status: 'string',
      vpcCidrBlock: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkVpcNetworkConfigRegionBindingList extends $dara.Model {
  regionBinding?: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkVpcNetworkConfigRegionBindingListRegionBinding[];
  static names(): { [key: string]: string } {
    return {
      regionBinding: 'RegionBinding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionBinding: { 'type': 'array', 'itemType': DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkVpcNetworkConfigRegionBindingListRegionBinding },
    };
  }

  validate() {
    if(Array.isArray(this.regionBinding)) {
      $dara.Model.validateArray(this.regionBinding);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkVpcNetworkConfig extends $dara.Model {
  cidrAllocationMode?: string;
  regionBindingList?: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkVpcNetworkConfigRegionBindingList;
  subnet?: string;
  static names(): { [key: string]: string } {
    return {
      cidrAllocationMode: 'CidrAllocationMode',
      regionBindingList: 'RegionBindingList',
      subnet: 'Subnet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrAllocationMode: 'string',
      regionBindingList: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkVpcNetworkConfigRegionBindingList,
      subnet: 'string',
    };
  }

  validate() {
    if(this.regionBindingList && typeof (this.regionBindingList as any).validate === 'function') {
      (this.regionBindingList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetwork extends $dara.Model {
  associatedCenId?: string;
  associatedCenOwnerId?: string;
  associatedCenStatus?: string;
  associatedCloudBoxCount?: string;
  associatedVpcStatus?: string;
  availableCloudBoxCount?: string;
  ccnId?: string;
  cenStatusErrorCode?: string;
  cenStatusErrorMessage?: string;
  cidrBlock?: string;
  createTime?: number;
  description?: string;
  interworkingStatus?: string;
  name?: string;
  newAgw?: boolean;
  processingCenId?: string;
  resourceGroupId?: string;
  snatCidrBlock?: string;
  subnet?: string;
  tags?: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTags;
  trNetworkConfig?: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTrNetworkConfig;
  vpcNetworkConfig?: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkVpcNetworkConfig;
  vpcStatusErrorCode?: string;
  vpcStatusErrorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      associatedCenId: 'AssociatedCenId',
      associatedCenOwnerId: 'AssociatedCenOwnerId',
      associatedCenStatus: 'AssociatedCenStatus',
      associatedCloudBoxCount: 'AssociatedCloudBoxCount',
      associatedVpcStatus: 'AssociatedVpcStatus',
      availableCloudBoxCount: 'AvailableCloudBoxCount',
      ccnId: 'CcnId',
      cenStatusErrorCode: 'CenStatusErrorCode',
      cenStatusErrorMessage: 'CenStatusErrorMessage',
      cidrBlock: 'CidrBlock',
      createTime: 'CreateTime',
      description: 'Description',
      interworkingStatus: 'InterworkingStatus',
      name: 'Name',
      newAgw: 'NewAgw',
      processingCenId: 'ProcessingCenId',
      resourceGroupId: 'ResourceGroupId',
      snatCidrBlock: 'SnatCidrBlock',
      subnet: 'Subnet',
      tags: 'Tags',
      trNetworkConfig: 'TrNetworkConfig',
      vpcNetworkConfig: 'VpcNetworkConfig',
      vpcStatusErrorCode: 'VpcStatusErrorCode',
      vpcStatusErrorMessage: 'VpcStatusErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedCenId: 'string',
      associatedCenOwnerId: 'string',
      associatedCenStatus: 'string',
      associatedCloudBoxCount: 'string',
      associatedVpcStatus: 'string',
      availableCloudBoxCount: 'string',
      ccnId: 'string',
      cenStatusErrorCode: 'string',
      cenStatusErrorMessage: 'string',
      cidrBlock: 'string',
      createTime: 'number',
      description: 'string',
      interworkingStatus: 'string',
      name: 'string',
      newAgw: 'boolean',
      processingCenId: 'string',
      resourceGroupId: 'string',
      snatCidrBlock: 'string',
      subnet: 'string',
      tags: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTags,
      trNetworkConfig: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTrNetworkConfig,
      vpcNetworkConfig: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkVpcNetworkConfig,
      vpcStatusErrorCode: 'string',
      vpcStatusErrorMessage: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    if(this.trNetworkConfig && typeof (this.trNetworkConfig as any).validate === 'function') {
      (this.trNetworkConfig as any).validate();
    }
    if(this.vpcNetworkConfig && typeof (this.vpcNetworkConfig as any).validate === 'function') {
      (this.vpcNetworkConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudConnectNetworksResponseBodyCloudConnectNetworks extends $dara.Model {
  cloudConnectNetwork?: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetwork[];
  static names(): { [key: string]: string } {
    return {
      cloudConnectNetwork: 'CloudConnectNetwork',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudConnectNetwork: { 'type': 'array', 'itemType': DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetwork },
    };
  }

  validate() {
    if(Array.isArray(this.cloudConnectNetwork)) {
      $dara.Model.validateArray(this.cloudConnectNetwork);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudConnectNetworksResponseBody extends $dara.Model {
  cloudConnectNetworks?: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworks;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page for paging in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3F2A0B80-D6D1-4764-8D77-38067DBBA345
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudConnectNetworks: 'CloudConnectNetworks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudConnectNetworks: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworks,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.cloudConnectNetworks && typeof (this.cloudConnectNetworks as any).validate === 'function') {
      (this.cloudConnectNetworks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


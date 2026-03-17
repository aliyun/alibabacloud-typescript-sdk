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

export class DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetwork extends $dara.Model {
  associatedCenId?: string;
  associatedCenOwnerId?: string;
  associatedCloudBoxCount?: string;
  availableCloudBoxCount?: string;
  ccnId?: string;
  cidrBlock?: string;
  createTime?: number;
  description?: string;
  interworkingStatus?: string;
  name?: string;
  newAgw?: boolean;
  resourceGroupId?: string;
  snatCidrBlock?: string;
  subnet?: string;
  tags?: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTags;
  static names(): { [key: string]: string } {
    return {
      associatedCenId: 'AssociatedCenId',
      associatedCenOwnerId: 'AssociatedCenOwnerId',
      associatedCloudBoxCount: 'AssociatedCloudBoxCount',
      availableCloudBoxCount: 'AvailableCloudBoxCount',
      ccnId: 'CcnId',
      cidrBlock: 'CidrBlock',
      createTime: 'CreateTime',
      description: 'Description',
      interworkingStatus: 'InterworkingStatus',
      name: 'Name',
      newAgw: 'NewAgw',
      resourceGroupId: 'ResourceGroupId',
      snatCidrBlock: 'SnatCidrBlock',
      subnet: 'Subnet',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedCenId: 'string',
      associatedCenOwnerId: 'string',
      associatedCloudBoxCount: 'string',
      availableCloudBoxCount: 'string',
      ccnId: 'string',
      cidrBlock: 'string',
      createTime: 'number',
      description: 'string',
      interworkingStatus: 'string',
      name: 'string',
      newAgw: 'boolean',
      resourceGroupId: 'string',
      snatCidrBlock: 'string',
      subnet: 'string',
      tags: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
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
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3F2A0B80-D6D1-4764-8D77-38067DBBA345
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the CCN instances.
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


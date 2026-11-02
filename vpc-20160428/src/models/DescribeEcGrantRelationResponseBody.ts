// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEcGrantRelationResponseBodyEcGrantRelations extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VPC instance in the authorization relationship belongs.
   * 
   * @example
   * 1250123456123456
   */
  aliUid?: number;
  /**
   * @remarks
   * The time when the VPC-connected instance granted the authorization to the VBR instance.
   * 
   * @example
   * 2022-09-02T11:46Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The scope of VBR instances that receive the authorization. Valid values:
   * 
   * - **All**: Grants authorization of the VPC-connected instance to all VBR instances in the specified region and under the specified Alibaba Cloud account.
   * - **Specify**: Grants authorization of the VPC-connected instance to a specified VBR instance.
   * 
   * @example
   * All
   */
  grantType?: string;
  /**
   * @remarks
   * The instance ID of the VPC-connected instance in the authorization relationship.
   * 
   * @example
   * vpc-bp1brjuegjc88v3u9****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the VPC instance in the authorization relationship.
   * 
   * @example
   * VPCname
   */
  instanceName?: string;
  /**
   * @remarks
   * The ID of the vRouter of the VPC instance in the authorization relationship.
   * 
   * @example
   * vrt-bp1i0yzgjd8ra05ec****
   */
  instanceRouterId?: string;
  /**
   * @remarks
   * The region ID of the VPC instance in the authorization relationship.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The result of the authorization relationship query. Valid values:
   * 
   * - **Created**: The VPC-connected instance and the VBR instance have an authorization relationship.
   * - **Deleted**: The VPC-connected instance and the VBR instance do not have an authorization relationship.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The instance ID of the VBR instance in the authorization relationship.
   * 
   * @example
   * vbr-m5ex0xf63xk8s5bob****
   */
  vbrInstanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VBR instance belongs.
   * 
   * @example
   * 1210123456123456
   */
  vbrOwnerUid?: number;
  /**
   * @remarks
   * The region ID of the VBR instance in the authorization relationship.
   * 
   * @example
   * cn-hangzhou
   */
  vbrRegionNo?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      gmtCreate: 'GmtCreate',
      grantType: 'GrantType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceRouterId: 'InstanceRouterId',
      regionNo: 'RegionNo',
      status: 'Status',
      vbrInstanceId: 'VbrInstanceId',
      vbrOwnerUid: 'VbrOwnerUid',
      vbrRegionNo: 'VbrRegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      gmtCreate: 'string',
      grantType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceRouterId: 'string',
      regionNo: 'string',
      status: 'string',
      vbrInstanceId: 'string',
      vbrOwnerUid: 'number',
      vbrRegionNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEcGrantRelationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of returned entries.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The list of authorization relationships.
   */
  ecGrantRelations?: DescribeEcGrantRelationResponseBodyEcGrantRelations[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page for paging in a paged query.
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
   * E6E90F6B-2B41-5AAF-ABEB-236ADBAAD91D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ecGrantRelations: 'EcGrantRelations',
      page: 'Page',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ecGrantRelations: { 'type': 'array', 'itemType': DescribeEcGrantRelationResponseBodyEcGrantRelations },
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ecGrantRelations)) {
      $dara.Model.validateArray(this.ecGrantRelations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


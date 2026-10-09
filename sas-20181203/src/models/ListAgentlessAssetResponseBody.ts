// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentlessAssetResponseBodyAssetList extends $dara.Model {
  /**
   * @remarks
   * The type of the cloud disk. Valid values:
   * 
   * - system: system cloud disk.
   * 
   * - data: data cloud disk.
   * 
   * @example
   * system
   */
  diskType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * s-rj9gda4wolo0zixi****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * TestInstanceName
   */
  instanceName?: string;
  /**
   * @remarks
   * The type of the operating system.
   * 
   * @example
   * CentOS
   */
  platform?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The asset type. Valid values:
   * 
   * - **3**: user snapshot
   * 
   * - **4**: user-defined image
   * 
   * @example
   * 3
   */
  targetType?: number;
  static names(): { [key: string]: string } {
    return {
      diskType: 'DiskType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      platform: 'Platform',
      regionId: 'RegionId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      platform: 'string',
      regionId: 'string',
      targetType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentlessAssetResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 90
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentlessAssetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned list of assets.
   */
  assetList?: ListAgentlessAssetResponseBodyAssetList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListAgentlessAssetResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates this ID as a unique identifier for the request. You can use this ID to troubleshoot and locate issues.
   * 
   * @example
   * F8B6F758-BCD4-597A-8A2C-DA5A552C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assetList: 'AssetList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetList: { 'type': 'array', 'itemType': ListAgentlessAssetResponseBodyAssetList },
      pageInfo: ListAgentlessAssetResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assetList)) {
      $dara.Model.validateArray(this.assetList);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


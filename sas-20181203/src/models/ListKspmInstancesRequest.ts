// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKspmInstancesRequestCloudAssetTypes extends $dara.Model {
  /**
   * @remarks
   * The subtype of the asset. The value is in the format of asset type - subtype. Valid values:
   * 
   * - **0**: Workload
   *     *  **0**: Pod
   *     *  **1**: DaemonSet
   *     *  **2**: StatefulSet
   * - **1**: Service
   *     *  **0**: Service
   * - **2**: Namespace
   *     *  **0**: Namespace
   * - **3**: Authorization
   *     *  **0**: Role
   *     *  **1**: ClusterRole
   *     *  **2**: ClusterRoleBinding
   *     *  **3**: RoleBinding
   *     *  **4**: ServiceAccount
   * - **4**: Storage
   *     *  **0**: PersistentVolume
   *     *  **1**: PersistentVolumeClaim
   *     *  **2**: StorageClass
   * - **5**: Container
   *     *  **0**: Image
   * - **6**: Network
   *     *  **0**: Route
   *     *  **0**: Ingress
   * - **7**: Configuration
   *     *  **0**: ConfigMap
   * - **8**: Policies
   *     *  **0**: LimitRanges
   *     *  **1**: ResourceQuota.
   * 
   * @example
   * 0
   */
  assetSubType?: number;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * - **0**: Workload
   * - **1**: Service
   * - **2**: Namespace
   * - **3**: Authorization
   * - **4**: Storage
   * - **5**: Container
   * - **6**: Network
   * - **7**: Configuration
   * - **8**: Policies.
   * 
   * @example
   * 0
   */
  assetType?: number;
  /**
   * @remarks
   * The asset vendor. This parameter is fixed to **200**.
   * 
   * @example
   * 200
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      assetSubType: 'AssetSubType',
      assetType: 'AssetType',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetSubType: 'number',
      assetType: 'number',
      vendor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKspmInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of asset type information for Kubernetes assets.
   */
  cloudAssetTypes?: ListKspmInstancesRequestCloudAssetTypes[];
  /**
   * @remarks
   * The search conditions for assets. This parameter is in JSON format. Pay attention to letter case when you specify this parameter. The following fields are included:
   * 
   * - **name**: the search item.
   * - **value**: the value of the search item.
   * - **logicalExp**: the logical relationship between multiple conditions. Valid values:
   *     - **OR**: The conditions are in an OR relationship.
   *     - **AND**: The conditions are in an AND relationship.
   * > You can search by region, instance name, instance ID, alert status, risk status, or tag.
   * 
   * @example
   * [{"name":"vulStatus","value":"YES","logicalExp":"AND"}]
   */
  criteria?: string;
  /**
   * @remarks
   * The page number of the page to return in the query results. Default value: 1, which indicates that the results are returned starting from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The logical relationship between multiple search conditions. Valid values:
   * 
   * - **OR**: The search conditions are in an OR relationship.
   * - **AND**: The search conditions are in an AND relationship.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudAssetTypes: 'CloudAssetTypes',
      criteria: 'Criteria',
      currentPage: 'CurrentPage',
      logicalExp: 'LogicalExp',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAssetTypes: { 'type': 'array', 'itemType': ListKspmInstancesRequestCloudAssetTypes },
      criteria: 'string',
      currentPage: 'number',
      logicalExp: 'string',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cloudAssetTypes)) {
      $dara.Model.validateArray(this.cloudAssetTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


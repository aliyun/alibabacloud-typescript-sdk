// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKspmInstancesRequestCloudAssetTypes extends $dara.Model {
  /**
   * @remarks
   * Subtype of the product.
   * Asset type-subtype. Values:
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
   *     *  **1**: ResourceQuota
   * 
   * @example
   * 0
   */
  assetSubType?: number;
  /**
   * @remarks
   * Type of the asset. Values:
   * 
   * - **0**: Workload
   * - **1**: Service
   * - **2**: Namespace
   * - **3**: Authorization
   * - **4**: Storage
   * - **5**: Container
   * - **6**: Network
   * - **7**: Configuration
   * - **8**: Policies
   * 
   * @example
   * 0
   */
  assetType?: number;
  /**
   * @remarks
   * Vendor of the asset. The fixed value is **200**.
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
   * List of Kubernetes asset type information.
   */
  cloudAssetTypes?: ListKspmInstancesRequestCloudAssetTypes[];
  /**
   * @remarks
   * Set the conditions for searching assets. This parameter is in JSON format, and case sensitivity should be noted when entering parameters. It includes the following fields:
   * 
   * - **name**: Search item
   * - **value**: Value of the search item
   * - **logicalExp**: The relationship between search items when multiple conditions are used. Values:
   *     - **OR**: Indicates an **or** relationship between multiple conditions.
   *     - **AND**: Indicates an **and** relationship between multiple conditions.
   * > Supports using region, instance name, instance ID, alarm status, risk status, and tag search conditions.
   * 
   * @example
   * [{"name":"vulStatus","value":"YES","logicalExp":"AND"}]
   */
  criteria?: string;
  /**
   * @remarks
   * Set which page to start displaying the query results from. The default value is 1, indicating that the display starts from the first page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Set the logical relationship that takes effect between multiple search conditions. Values:
   * 
   * - **OR**: Indicates an **or** relationship between multiple search conditions.
   * - **AND**: Indicates an **and** relationship between multiple search conditions.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The maximum number of data entries displayed per page during pagination. The default value is 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the instance is located.
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


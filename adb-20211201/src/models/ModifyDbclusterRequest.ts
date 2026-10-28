// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The number of AI nodes.
   * 
   * @example
   * 3
   */
  AINodeNumber?: number;
  /**
   * @remarks
   * The AI node specifications.
   * 
   * @example
   * ADB.MLPlus.4
   */
  AINodeSpec?: string;
  /**
   * @remarks
   * The reserved compute resources. Valid values: 0 ACU to 4096 ACU. Step: 16. 1 ACU is approximately equal to 1 core and 4 GB of memory.
   * > Include the unit when you specify this parameter.
   * 
   * @example
   * 16ACU
   */
  computeResource?: string;
  /**
   * @remarks
   * The ID of the Data Lakehouse Edition cluster.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the ID of the Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to allocate all reserved compute resources to the default resource group (user_default). Valid values:
   * - true (default): Yes.
   * - false: No.
   * 
   * @example
   * true
   */
  enableDefaultResourcePool?: boolean;
  /**
   * @remarks
   * The product form. Valid values:
   * - **IntegrationForm**: Integration form.
   * - **LegacyForm**: Data Lakehouse Edition.
   * 
   * @example
   * LegacyForm
   */
  productForm?: string;
  /**
   * @remarks
   * The target product version. When you switch from LegacyForm to IntegrationForm Enterprise Edition in-place, set this parameter to enterprise_version and specify ProductForm, ReservedNodeSize, and ReservedNodeCount at the same time.
   * 
   * @example
   * enterprise_version
   */
  productVersion?: string;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the region ID of the specified Data Lakehouse Edition cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of reserved nodes. 
   * - For Enterprise Edition, the default value is 3 and the step is 3.
   * - For Basic Edition, the default value is 1.
   * > Specify this parameter only when ProductForm is set to IntegrationForm.
   * 
   * @example
   * 3
   */
  reservedNodeCount?: number;
  /**
   * @remarks
   * The node specifications for reserved storage resources. Valid values: 8 ACU, 12 ACU, and 16 ACU.
   * > Include the unit when you specify this parameter. Specify this parameter only when ProductForm is set to IntegrationForm.
   * 
   * @example
   * 8ACU
   */
  reservedNodeSize?: string;
  /**
   * @remarks
   * The reserved storage resources. Valid values: 0 ACU to 2064 ACU. Step: 24. 1 ACU is approximately equal to 1 core and 4 GB of memory.
   * > Include the unit when you specify this parameter.
   * 
   * @example
   * 24ACU
   */
  storageResource?: string;
  static names(): { [key: string]: string } {
    return {
      AINodeNumber: 'AINodeNumber',
      AINodeSpec: 'AINodeSpec',
      computeResource: 'ComputeResource',
      DBClusterId: 'DBClusterId',
      enableDefaultResourcePool: 'EnableDefaultResourcePool',
      productForm: 'ProductForm',
      productVersion: 'ProductVersion',
      regionId: 'RegionId',
      reservedNodeCount: 'ReservedNodeCount',
      reservedNodeSize: 'ReservedNodeSize',
      storageResource: 'StorageResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AINodeNumber: 'number',
      AINodeSpec: 'string',
      computeResource: 'string',
      DBClusterId: 'string',
      enableDefaultResourcePool: 'boolean',
      productForm: 'string',
      productVersion: 'string',
      regionId: 'string',
      reservedNodeCount: 'number',
      reservedNodeSize: 'string',
      storageResource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


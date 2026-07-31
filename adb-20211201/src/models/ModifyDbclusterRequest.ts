// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterRequest extends $dara.Model {
  AINodeNumber?: number;
  /**
   * @example
   * ADB.MLPlus.4
   */
  AINodeSpec?: string;
  /**
   * @remarks
   * The compute reserved resources. Valid values: 0 ACU to 4096 ACU, in increments of 16. 1 ACU is approximately equivalent to 1 core and 4 GB of memory.
   * > Include the unit when you specify this parameter.
   * 
   * @example
   * 16ACU
   */
  computeResource?: string;
  /**
   * @remarks
   * The ID of the Data Lakehouse Edition cluster.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the cluster ID of a Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to allocate all compute reserved resources to the default resource group (user_default). Valid values:
   * - true (default): All compute reserved resources are allocated to the default resource group.
   * - false: Not all compute reserved resources are allocated to the default resource group.
   * 
   * @example
   * true
   */
  enableDefaultResourcePool?: boolean;
  /**
   * @remarks
   * The product form. Valid values:
   * - **IntegrationForm**: integrated form.
   * - **LegacyForm**: Data Lakehouse Edition.
   * 
   * @example
   * LegacyForm
   */
  productForm?: string;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the region ID of a specified Data Lakehouse Edition cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of reserved nodes. 
   * - Enterprise Edition: The default value is 3. The value increases in increments of 3.
   * - Basic Edition: The default value is 1.
   * > This parameter is required only when ProductForm is set to IntegrationForm.
   * 
   * @example
   * 3
   */
  reservedNodeCount?: number;
  /**
   * @remarks
   * The node specifications of storage reserved resources. Valid values: 8ACU, 12ACU, and 16ACU.
   * > Include the unit when you specify this parameter. This parameter is required only when ProductForm is set to IntegrationForm.
   * 
   * @example
   * 8ACU
   */
  reservedNodeSize?: string;
  /**
   * @remarks
   * The storage reserved resources. Valid values: 0 ACU to 2064 ACU, in increments of 24. 1 ACU is approximately equivalent to 1 core and 4 GB of memory.
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


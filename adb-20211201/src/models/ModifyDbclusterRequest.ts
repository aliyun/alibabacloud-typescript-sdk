// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The reserved computing resources. Valid values: 0ACU to 4096ACU. The value must be in increments of 16ACU. Each ACU is approximately equal to 1 core and 4 GB memory.
   * 
   * >  This parameter must be specified with a unit.
   * 
   * @example
   * 16ACU
   */
  computeResource?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to allocate all reserved computing resources to the user_default resource group. Valid values:
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * true
   */
  enableDefaultResourcePool?: boolean;
  /**
   * @example
   * LegacyForm
   */
  productForm?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  reservedNodeCount?: number;
  /**
   * @example
   * LegacyForm
   */
  reservedNodeSize?: string;
  /**
   * @remarks
   * The reserved storage resources. Valid values: 0ACU to 2064ACU. The value must be in increments of 24ACU. Each ACU is approximately equal to 1 core and 4 GB memory.
   * 
   * >  This parameter must be specified with a unit.
   * 
   * @example
   * 24ACU
   */
  storageResource?: string;
  static names(): { [key: string]: string } {
    return {
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


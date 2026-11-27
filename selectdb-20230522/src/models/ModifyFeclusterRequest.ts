// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFEClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The specifications of the FE cluster. Valid values:
   * 
   * - selectdb_fe.xlarge16: 4 cores and 16 GB.
   * 
   * - selectdb_fe.2xlarge16: 8 cores and 32 GB.
   * 
   * - selectdb_fe.4xlarge16: 16 cores and 64 GB.
   * 
   * - selectdb_fe.8xlarge16: 32 cores and 128 GB.
   * 
   * @example
   * selectdb_fe.2xlarge16
   */
  FEClassCode?: string;
  /**
   * @remarks
   * The FE cluster ID. Default value: {instance ID}-fe.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****-fe
   */
  FEClusterId?: string;
  /**
   * @remarks
   * The number of nodes in the FE cluster. The value must be an odd number. Valid values for locally redundant instances: 1 to 11. Valid values for zone-redundant instances: 3 to 11.
   * 
   * @example
   * 5
   */
  FENodeCount?: string;
  /**
   * @remarks
   * The product ID. Default value: selectdb.
   * 
   * @example
   * selectdb
   */
  product?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      FEClassCode: 'FEClassCode',
      FEClusterId: 'FEClusterId',
      FENodeCount: 'FENodeCount',
      product: 'Product',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      FEClassCode: 'string',
      FEClusterId: 'string',
      FENodeCount: 'string',
      product: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


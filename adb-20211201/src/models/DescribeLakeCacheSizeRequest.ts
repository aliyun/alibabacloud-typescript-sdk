// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLakeCacheSizeRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster ID of a Data Warehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp10b6646l07akdt
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID of the instance. The value must be the same as the region of the instance specified by DBClusterId.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
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


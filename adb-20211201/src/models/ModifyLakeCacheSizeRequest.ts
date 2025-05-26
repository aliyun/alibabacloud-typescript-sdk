// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLakeCacheSizeRequest extends $dara.Model {
  /**
   * @remarks
   * The lake cache size that you want to set. Unit: GB.
   * 
   * @example
   * 100
   */
  capacity?: number;
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp10yt0gva71ei7d
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the lake cache feature.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableLakeCache?: boolean;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      DBClusterId: 'DBClusterId',
      enableLakeCache: 'EnableLakeCache',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      DBClusterId: 'string',
      enableLakeCache: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


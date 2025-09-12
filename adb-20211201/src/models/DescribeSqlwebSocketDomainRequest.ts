// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLWebSocketDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1lw6g669zpi660
   */
  DBClusterId?: string;
  module?: string;
  /**
   * @remarks
   * The region ID
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      module: 'Module',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      module: 'string',
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


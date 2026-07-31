// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLWebSocketDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) API to query the details of all clusters in your account, including cluster IDs.
   * 
   * @example
   * amv-bp1lw6g669zpi660
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The application module name.
   * 
   * - `SQLWebSocket`: The module for SQL development.
   * 
   * - `Assistant`: The module for the intelligent assistant.
   * 
   * @example
   * Assistant
   */
  module?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > Call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) API to query the region IDs supported by AnalyticDB for MySQL.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyStreamingDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-k2j36a3172b102593
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The configurations of the data source.
   * 
   * @example
   * {"brokers":"broker0:9091,broker1:9091","topic":"topic"}
   */
  dataSourceConfig?: string;
  /**
   * @remarks
   * The description of the data source.
   * 
   * @example
   * test-kafka
   */
  dataSourceDescription?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 57
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query the most recent region list.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      dataSourceConfig: 'DataSourceConfig',
      dataSourceDescription: 'DataSourceDescription',
      dataSourceId: 'DataSourceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      dataSourceConfig: 'string',
      dataSourceDescription: 'string',
      dataSourceId: 'string',
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


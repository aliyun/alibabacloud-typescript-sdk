// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStreamingDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * CreateExternalDataSource
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Data source configuration information.
   * 
   * This parameter is required.
   * 
   * @example
   * {"broker_list":"broker0:9091,broker1:9091","topic":"topic"}
   */
  dataSourceConfig?: string;
  /**
   * @remarks
   * Data source description.
   * 
   * @example
   * test-kafka
   */
  dataSourceDescription?: string;
  /**
   * @remarks
   * Data source name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-kafka
   */
  dataSourceName?: string;
  /**
   * @remarks
   * Data source type. Values:
   *  -  kafka
   * 
   * This parameter is required.
   * 
   * @example
   * kafka
   */
  dataSourceType?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * > You can view available region IDs through the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) interface.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Real-time data service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      dataSourceConfig: 'DataSourceConfig',
      dataSourceDescription: 'DataSourceDescription',
      dataSourceName: 'DataSourceName',
      dataSourceType: 'DataSourceType',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      dataSourceConfig: 'string',
      dataSourceDescription: 'string',
      dataSourceName: 'string',
      dataSourceType: 'string',
      regionId: 'string',
      serviceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


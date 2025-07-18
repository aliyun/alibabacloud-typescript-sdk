// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStreamingDataSourcesResponseBodyDataSourceItems extends $dara.Model {
  /**
   * @remarks
   * The time when the data source was created.
   * 
   * @example
   * 2019-09-08T16:00:00Z
   */
  createTime?: string;
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
   * @example
   * 1
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * test-kafka
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   kafka
   * 
   * @example
   * kafka
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The information about the service status. For example, if the service is in the exception state, the cause of the exception is displayed. If the service is in the running state, this parameter is left empty.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The time when the data source was last modified.
   * 
   * @example
   * 2019-09-08T17:00:00Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * 1
   */
  serviceId?: number;
  /**
   * @remarks
   * The status of the service. Valid values:
   * 
   * *   init
   * *   running
   * *   exception
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSourceConfig: 'DataSourceConfig',
      dataSourceDescription: 'DataSourceDescription',
      dataSourceId: 'DataSourceId',
      dataSourceName: 'DataSourceName',
      dataSourceType: 'DataSourceType',
      errorMessage: 'ErrorMessage',
      modifyTime: 'ModifyTime',
      serviceId: 'ServiceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dataSourceConfig: 'string',
      dataSourceDescription: 'string',
      dataSourceId: 'number',
      dataSourceName: 'string',
      dataSourceType: 'string',
      errorMessage: 'string',
      modifyTime: 'string',
      serviceId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStreamingDataSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried data sources.
   */
  dataSourceItems?: ListStreamingDataSourcesResponseBodyDataSourceItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceItems: 'DataSourceItems',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceItems: { 'type': 'array', 'itemType': ListStreamingDataSourcesResponseBodyDataSourceItems },
      pageNumber: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceItems)) {
      $dara.Model.validateArray(this.dataSourceItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


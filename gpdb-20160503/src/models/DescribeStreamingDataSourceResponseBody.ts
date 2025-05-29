// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStreamingDataSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2019-09-08T16:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * Data source configuration information.
   * 
   * @example
   * {"brokers":"broker0:9091,broker1:9091","topic":"topic"}
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
   * Data source ID.
   * 
   * @example
   * 1
   */
  dataSourceId?: string;
  /**
   * @remarks
   * Data source name.
   * 
   * @example
   * test-kafka
   */
  dataSourceName?: string;
  /**
   * @remarks
   * Data source type, values include:
   *  -  kafka
   * 
   * @example
   * kafka
   */
  dataSourceType?: string;
  /**
   * @remarks
   * Service status message, for example, in case of an exception, it will show the reason for the exception. In normal Running state, this value is empty.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  /**
   * @remarks
   * External data service ID.
   * 
   * @example
   * 1
   */
  serviceId?: number;
  /**
   * @remarks
   * Service status:
   * 
   * - Initializing init
   * 
   * - Running running
   * 
   * - Exception exception
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
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dataSourceConfig: 'string',
      dataSourceDescription: 'string',
      dataSourceId: 'string',
      dataSourceName: 'string',
      dataSourceType: 'string',
      errorMessage: 'string',
      requestId: 'string',
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


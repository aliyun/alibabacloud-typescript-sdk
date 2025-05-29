// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExternalDataSourcesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time when the service was created.
   * 
   * @example
   * 2019-09-08T16:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the data source.
   * 
   * @example
   * test
   */
  dataSourceDescription?: string;
  /**
   * @remarks
   * The service directory in which Hadoop-related configuration files are stored.
   * 
   * @example
   * HadoopDir
   */
  dataSourceDir?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * 123
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * hdfs_pxf
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The status of the service. Valid values:
   * 
   * *   init
   * *   running
   * *   exception
   * 
   * @example
   * Running
   */
  dataSourceStatus?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * HDFS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The Id of external data service
   * 
   * @example
   * 123
   */
  externalDataServiceId?: number;
  /**
   * @remarks
   * The time when the service was last modified.
   * 
   * @example
   * 2019-10-08T16:00:00Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The information about the service status. For example, if the service is in the exception state, the cause of the exception is displayed. If the service is in the running state, this parameter is left empty.
   * 
   * @example
   * ""
   */
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSourceDescription: 'DataSourceDescription',
      dataSourceDir: 'DataSourceDir',
      dataSourceId: 'DataSourceId',
      dataSourceName: 'DataSourceName',
      dataSourceStatus: 'DataSourceStatus',
      dataSourceType: 'DataSourceType',
      externalDataServiceId: 'ExternalDataServiceId',
      modifyTime: 'ModifyTime',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dataSourceDescription: 'string',
      dataSourceDir: 'string',
      dataSourceId: 'number',
      dataSourceName: 'string',
      dataSourceStatus: 'string',
      dataSourceType: 'string',
      externalDataServiceId: 'number',
      modifyTime: 'string',
      statusMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


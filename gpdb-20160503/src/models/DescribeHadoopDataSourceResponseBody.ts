// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHadoopDataSourceResponseBody extends $dara.Model {
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
   * The description of the service. The description can be up to 256 characters in length.
   * 
   * @example
   * pxf for hdfs data source
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
   * The data source ID.
   * 
   * @example
   * 123
   */
  dataSourceId?: string;
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
   * *   Init
   * *   Running
   * *   Exception
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
   * hive
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The E-MapReduce (EMR) Hadoop cluster ID.
   * 
   * @example
   * c-1234567
   */
  emrInstanceId?: string;
  /**
   * @remarks
   * The ID of the external data service.
   * 
   * @example
   * 2988
   */
  externalDataServiceId?: string;
  /**
   * @remarks
   * The content of the Hadoop hdfs-site.xml file.
   * 
   * @example
   * xxxxxx
   */
  HDFSConf?: string;
  /**
   * @remarks
   * The content of the Hadoop core-site.xml file.
   * 
   * @example
   * xxxxxx
   */
  hadoopCoreConf?: string;
  /**
   * @remarks
   * The type of the external service. Valid values:
   * 
   * *   emr
   * *   selfCreate
   * 
   * @example
   * HDFS
   */
  hadoopCreateType?: string;
  /**
   * @remarks
   * The IP address and hostname of the Hadoop cluster (data source) in the /etc/hosts file.
   * 
   * @example
   * 127.0.0.1 localhost
   */
  hadoopHostsAddress?: string;
  /**
   * @remarks
   * The content of the Hadoop hive-site.xml file.
   * 
   * @example
   * xxxxxx
   */
  hiveConf?: string;
  /**
   * @remarks
   * The content of the Hadoop mapred-site.xml file.
   * 
   * @example
   * xxxxxx
   */
  mapReduceConf?: string;
  /**
   * @remarks
   * The time when the data source was last modified.
   * 
   * @example
   * 2024-08-23T02:11:47Z
   */
  modifyTime?: string;
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
   * The information about the service status. For example, if the service is in the exception state, the cause of the exception is displayed. If the service is in the running state, this parameter is left empty.
   * 
   * @example
   * ""
   */
  statusMessage?: string;
  /**
   * @remarks
   * The content of the Hadoop yarn-site.xml file.
   * 
   * @example
   * xxxxxx
   */
  yarnConf?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSourceDescription: 'DataSourceDescription',
      dataSourceDir: 'DataSourceDir',
      dataSourceId: 'DataSourceId',
      dataSourceName: 'DataSourceName',
      dataSourceStatus: 'DataSourceStatus',
      dataSourceType: 'DataSourceType',
      emrInstanceId: 'EmrInstanceId',
      externalDataServiceId: 'ExternalDataServiceId',
      HDFSConf: 'HDFSConf',
      hadoopCoreConf: 'HadoopCoreConf',
      hadoopCreateType: 'HadoopCreateType',
      hadoopHostsAddress: 'HadoopHostsAddress',
      hiveConf: 'HiveConf',
      mapReduceConf: 'MapReduceConf',
      modifyTime: 'ModifyTime',
      requestId: 'RequestId',
      statusMessage: 'StatusMessage',
      yarnConf: 'YarnConf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dataSourceDescription: 'string',
      dataSourceDir: 'string',
      dataSourceId: 'string',
      dataSourceName: 'string',
      dataSourceStatus: 'string',
      dataSourceType: 'string',
      emrInstanceId: 'string',
      externalDataServiceId: 'string',
      HDFSConf: 'string',
      hadoopCoreConf: 'string',
      hadoopCreateType: 'string',
      hadoopHostsAddress: 'string',
      hiveConf: 'string',
      mapReduceConf: 'string',
      modifyTime: 'string',
      requestId: 'string',
      statusMessage: 'string',
      yarnConf: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


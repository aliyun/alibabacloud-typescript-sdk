// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHadoopDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Service description, with a maximum length of 256 characters.
   * 
   * @example
   * pxf for hdfs data source
   */
  dataSourceDescription?: string;
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
   * The type of the data source. Valid values:
   * 
   * *   mysql
   * 
   * - postgresql
   * 
   * *   hdfs
   * 
   * - hive
   * 
   * @example
   * mysql
   */
  dataSourceType?: string;
  /**
   * @remarks
   * When HadoopCreateType is Emr, the value of this field is the EMR instance ID.
   * 
   * @example
   * c-1234567
   */
  emrInstanceId?: string;
  /**
   * @remarks
   * The content of the Hadoop hdfs-site.xml file. This parameter must be specified when DataSourceType is set to HDFS.
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
   * *   emr: E-MapReduce (EMR) Hadoop cluster.
   * *   selfCreate: self-managed Hadoop cluster.
   * 
   * @example
   * emr
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
   * The content of the Hadoop hive-site.xml file. This parameter must be specified when DataSourceType is set to Hive.
   * 
   * @example
   * xxxxxx
   */
  hiveConf?: string;
  /**
   * @remarks
   * The content of the Hadoop mapred-site.xml file. This parameter must be specified when DataSourceType is set to HDFS.
   * 
   * @example
   * <?xml version="1.0" ?>
   * <!-- Created at 2023-08-15 13:53:28.962 -->
   * <configuration>
   *     <property>
   *         <name>mapreduce.map.speculative</name>
   *         <value>true</value>
   *     </property>
   *     <property>
   *         <name>mapreduce.jobhistory.keytab</name>
   *         <value></value>
   *     </property>
   * </configuration>
   */
  mapReduceConf?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The content of the Hadoop yarn-site.xml file. This parameter must be specified when DataSourceType is set to HDFS.
   * 
   * @example
   * xxxxxx
   */
  yarnConf?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      dataSourceDescription: 'DataSourceDescription',
      dataSourceId: 'DataSourceId',
      dataSourceType: 'DataSourceType',
      emrInstanceId: 'EmrInstanceId',
      HDFSConf: 'HDFSConf',
      hadoopCoreConf: 'HadoopCoreConf',
      hadoopCreateType: 'HadoopCreateType',
      hadoopHostsAddress: 'HadoopHostsAddress',
      hiveConf: 'HiveConf',
      mapReduceConf: 'MapReduceConf',
      regionId: 'RegionId',
      yarnConf: 'YarnConf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      dataSourceDescription: 'string',
      dataSourceId: 'string',
      dataSourceType: 'string',
      emrInstanceId: 'string',
      HDFSConf: 'string',
      hadoopCoreConf: 'string',
      hadoopCreateType: 'string',
      hadoopHostsAddress: 'string',
      hiveConf: 'string',
      mapReduceConf: 'string',
      regionId: 'string',
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


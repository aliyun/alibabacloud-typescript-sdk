// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHadoopDataSourceRequest extends $dara.Model {
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
   * Service description.
   * 
   * @example
   * pxf for hdfs data source
   */
  dataSourceDescription?: string;
  /**
   * @remarks
   * Service name.
   * 
   * @example
   * hdfs_pxf
   */
  dataSourceName?: string;
  /**
   * @remarks
   * Type of Hadoop external table to be enabled, with values:
   * 
   * - HDFS 
   * 
   * - Hive
   * 
   * @example
   * HDFS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * When HadoopCreateType=Emr, this field should contain the EMR instance ID.
   * 
   * @example
   * c-1234567
   */
  emrInstanceId?: string;
  /**
   * @remarks
   * Content string of the Hadoop hdfs-site.xml file. This field is required when enabling an HDFS external table.
   * 
   * @example
   * <?xml version="1.0" ?>
   * <!-- Created at 2023-08-15 13:52:43.945 -->
   * <configuration>
   *     <property>
   *         <name>dfs.datanode.cache.revocation.timeout.ms</name>
   *         <value>900000</value>
   *     </property>
   *     <property>
   *         <name>dfs.namenode.resource.check.interval</name>
   *         <value>5000</value>
   *     </property>
   * </configuration>
   */
  HDFSConf?: string;
  /**
   * @remarks
   * Content string of the Hadoop core-site.xml file.
   * 
   * @example
   * <?xml version="1.0" ?>
   * <!-- Created at 2023-08-15 13:52:39.527 -->
   * <configuration>
   *     <property>
   *         <name>hadoop.http.authentication.kerberos.keytab</name>
   *         <value>/etc/emr/hadoop-conf/http.keytab</value>
   *     </property>
   *     <property>
   *         <name>fs.oss.idle.timeout.millisecond</name>
   *         <value>30000</value>
   *     </property>
   *     <property>
   *         <name>fs.oss.download.thread.concurrency</name>
   *         <value>32</value>
   *     </property>
   * </configuration>
   */
  hadoopCoreConf?: string;
  /**
   * @remarks
   * External service type:
   * 
   * - emr
   * 
   * - hadoop: Self-built Hadoop
   * 
   * @example
   * emr
   */
  hadoopCreateType?: string;
  /**
   * @remarks
   * Address and hostname of the Hadoop cluster\\"s source node in the /etc/hosts file.
   * 
   * @example
   * 192.168.220.128 master-1-1.c-xxx.cn-shanghai.emr.aliyuncs.com
   * 192.168.220.129 core-1-1.c-xxx.cn-shanghai.emr.aliyuncs.com
   * 192.168.220.130 core-1-2.c-xxx.cn-shanghai.emr.aliyuncs.com
   */
  hadoopHostsAddress?: string;
  /**
   * @remarks
   * Content string of the Hadoop hive-site.xml file. This field is required when enabling a HIVE external table.
   * 
   * @example
   * <?xml version="1.0" ?>
   * <!-- Created at 2023-08-15 13:52:50.646 -->
   * <configuration>
   *     <property>
   *         <name>hive.exec.reducers.bytes.per.reducer</name>
   *         <value>256000000</value>
   *     </property>
   *     <property>
   *         <name>hive.stats.column.autogather</name>
   *         <value>false</value>
   *     </property>
   * </configuration>
   */
  hiveConf?: string;
  /**
   * @remarks
   * Content string of the Hadoop mapred-site.xml file. This field is required when enabling an HDFS external table.
   * 
   * @example
   * xxxxxx
   */
  mapReduceConf?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) interface to view available region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Content string of the Hadoop yarn-site.xml file. This field is required when enabling an HDFS external table.
   * 
   * @example
   * <?xml version="1.0" ?>
   * <!-- Created at 2023-08-15 13:53:29.021 -->
   * <configuration>
   *     <property>
   *         <name>yarn.nodemanager.linux-container-executor.nonsecure-mode.local-user</name>
   *         <value>hadoop</value>
   *     </property>
   *     <property>
   *         <name>yarn.scheduler.fair.dynamic.max.assign</name>
   *         <value>true</value>
   *     </property>
   * </configuration>
   */
  yarnConf?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      dataSourceDescription: 'DataSourceDescription',
      dataSourceName: 'DataSourceName',
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
      dataSourceName: 'string',
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


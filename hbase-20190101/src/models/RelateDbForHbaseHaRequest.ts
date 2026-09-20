// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RelateDbForHBaseHaRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the BDS cluster. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/144595.html) operation to obtain the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bds-t4nj9v2x85******
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance ID of the primary instance.
   * 
   * This parameter is required.
   * 
   * @example
   * hb-bp1w6krp539******
   */
  haActive?: string;
  /**
   * @remarks
   * The ZooKeeper address of the primary instance. This parameter is required when the primary instance is a non-standard instance (IsActiveStandard is set to false).
   * 
   * @example
   * hb-t4naqsay5gn******-master1-001.hbase.singapore.rds.aliyuncs.com,hb-t4naqsay5gn******-master3-001.hbase.singapore.rds.aliyuncs.com,hb-t4naqsay5gn******-master2-001.hbase.singapore.rds.aliyuncs.com:2181:/hbase
   */
  haActiveClusterKey?: string;
  /**
   * @remarks
   * The cluster type of the primary instance. Valid values: **HBase** and **HBaseue**.
   * 
   * This parameter is required.
   * 
   * @example
   * hbase
   */
  haActiveDBType?: string;
  /**
   * @remarks
   * The HDFS directory of the primary instance. This parameter is required when the primary instance is a non-standard instance (IsActiveStandard is set to false).
   * 
   * @example
   * /hbase
   */
  haActiveHbaseFsDir?: string;
  /**
   * @remarks
   * The HDFS URI of the primary instance. This parameter is required when the primary instance is a non-standard instance (IsActiveStandard is set to false).
   * 
   * @example
   * hdfs://hb-t4naqsay5gn******-master1-001.hbase.rds.aliyuncs.com:8020,hb-t4naqsay5gn******-master2-001.hbase.rds.aliyuncs.com:8020
   */
  haActiveHdfsUri?: string;
  /**
   * @remarks
   * The password that corresponds to the username of the primary instance. This parameter is required when the primary instance is **HBaseue**.
   * 
   * @example
   * root
   */
  haActivePassword?: string;
  /**
   * @remarks
   * The username of the primary instance. This parameter is required when the primary instance is **HBaseue**.
   * 
   * @example
   * root
   */
  haActiveUser?: string;
  /**
   * @remarks
   * The database engine version of the primary instance. This parameter is required when the primary instance is a non-standard instance (IsActiveStandard is set to false). Valid values:
   * - **HBase1x**: HBase 1.x.
   * - **HBase2x**: HBase 2.x.
   * - **HBaseUE**: HBaseue.
   * 
   * @example
   * HBase2x
   */
  haActiveVersion?: string;
  /**
   * @remarks
   * The synchronization type. Valid values:
   * - **CLUSTER**: instance-level synchronization.
   * - **TABLE**: table-level synchronization.
   * - **SKIP**: no synchronization required.
   * 
   * This parameter is required.
   * 
   * @example
   * CLUSTER
   */
  haMigrateType?: string;
  /**
   * @remarks
   * The ID of the secondary instance cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * hb-bp1bl7iqzka******
   */
  haStandby?: string;
  /**
   * @remarks
   * The ZooKeeper address of the secondary instance. This parameter is required when the secondary instance is a non-standard instance (IsStandbyStandard is set to false).
   * 
   * @example
   * hb-bp1w6krp539******-master1-001.hbase.singapore.rds.aliyuncs.com,hb-bp1w6krp539******-master3-001.hbase.singapore.rds.aliyuncs.com,hb-t4naqsay5gn******-master2-001.hbase.singapore.rds.aliyuncs.com:2181:/hbase
   */
  haStandbyClusterKey?: string;
  /**
   * @remarks
   * The cluster type of the secondary instance. Valid values: **HBase** and **HBaseue**.
   * 
   * This parameter is required.
   * 
   * @example
   * hbase
   */
  haStandbyDBType?: string;
  /**
   * @remarks
   * The HDFS directory of the secondary instance. This parameter is required when the secondary instance is a non-standard instance (IsStandbyStandard is set to false).
   * 
   * @example
   * /hbase
   */
  haStandbyHbaseFsDir?: string;
  /**
   * @remarks
   * The HDFS URI of the secondary instance. This parameter is required when the secondary instance is a non-standard instance (IsStandbyStandard is set to false).
   * 
   * @example
   * hdfs://hb-bp1w6krp539******-master1-001.hbase.rds.aliyuncs.com:8020,hb-bp1w6krp539******-master2-001.hbase.rds.aliyuncs.com:8020
   */
  haStandbyHdfsUri?: string;
  /**
   * @remarks
   * The password that corresponds to the username of the secondary instance. This parameter is required when the secondary instance is **hbaseue**.
   * 
   * @example
   * root
   */
  haStandbyPassword?: string;
  /**
   * @remarks
   * The username of the secondary instance. This parameter is required when the secondary instance is **hbaseue**.
   * 
   * @example
   * root
   */
  haStandbyUser?: string;
  /**
   * @remarks
   * The database engine version of the secondary instance. This parameter is required when the secondary instance is a non-standard instance (IsStandbyStandard is set to false). Valid values:
   * - **HBase1x**: HBase 1.x.
   * - **HBase2x**: HBase 2.x.
   * - **HBaseUE**: HBaseue.
   * 
   * @example
   * HBase2x
   */
  haStandbyVersion?: string;
  /**
   * @remarks
   * The tables to synchronize. This parameter is required when HaMigrateType is set to TABLE. Separate multiple tables with commas (,).
   * 
   * @example
   * test,test1
   */
  haTables?: string;
  /**
   * @remarks
   * Specifies whether the primary instance is a standard instance. Set this parameter to **true** for a standard instance.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  isActiveStandard?: boolean;
  /**
   * @remarks
   * Specifies whether the secondary instance is a standard instance. Set this parameter to **true** for a standard instance.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  isStandbyStandard?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      haActive: 'HaActive',
      haActiveClusterKey: 'HaActiveClusterKey',
      haActiveDBType: 'HaActiveDBType',
      haActiveHbaseFsDir: 'HaActiveHbaseFsDir',
      haActiveHdfsUri: 'HaActiveHdfsUri',
      haActivePassword: 'HaActivePassword',
      haActiveUser: 'HaActiveUser',
      haActiveVersion: 'HaActiveVersion',
      haMigrateType: 'HaMigrateType',
      haStandby: 'HaStandby',
      haStandbyClusterKey: 'HaStandbyClusterKey',
      haStandbyDBType: 'HaStandbyDBType',
      haStandbyHbaseFsDir: 'HaStandbyHbaseFsDir',
      haStandbyHdfsUri: 'HaStandbyHdfsUri',
      haStandbyPassword: 'HaStandbyPassword',
      haStandbyUser: 'HaStandbyUser',
      haStandbyVersion: 'HaStandbyVersion',
      haTables: 'HaTables',
      isActiveStandard: 'IsActiveStandard',
      isStandbyStandard: 'IsStandbyStandard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      haActive: 'string',
      haActiveClusterKey: 'string',
      haActiveDBType: 'string',
      haActiveHbaseFsDir: 'string',
      haActiveHdfsUri: 'string',
      haActivePassword: 'string',
      haActiveUser: 'string',
      haActiveVersion: 'string',
      haMigrateType: 'string',
      haStandby: 'string',
      haStandbyClusterKey: 'string',
      haStandbyDBType: 'string',
      haStandbyHbaseFsDir: 'string',
      haStandbyHdfsUri: 'string',
      haStandbyPassword: 'string',
      haStandbyUser: 'string',
      haStandbyVersion: 'string',
      haTables: 'string',
      isActiveStandard: 'boolean',
      isStandbyStandard: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


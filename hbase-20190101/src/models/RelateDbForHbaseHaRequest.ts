// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RelateDbForHBaseHaRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bds-t4nj9v2x85******
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-bp1w6krp539******
   */
  haActive?: string;
  /**
   * @example
   * hb-t4naqsay5gn******-master1-001.hbase.singapore.rds.aliyuncs.com,hb-t4naqsay5gn******-master3-001.hbase.singapore.rds.aliyuncs.com,hb-t4naqsay5gn******-master2-001.hbase.singapore.rds.aliyuncs.com:2181:/hbase
   */
  haActiveClusterKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbase
   */
  haActiveDBType?: string;
  /**
   * @example
   * /hbase
   */
  haActiveHbaseFsDir?: string;
  /**
   * @example
   * hdfs://hb-t4naqsay5gn******-master1-001.hbase.rds.aliyuncs.com:8020,hb-t4naqsay5gn******-master2-001.hbase.rds.aliyuncs.com:8020
   */
  haActiveHdfsUri?: string;
  /**
   * @example
   * root
   */
  haActivePassword?: string;
  /**
   * @example
   * root
   */
  haActiveUser?: string;
  /**
   * @example
   * HBase2x
   */
  haActiveVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CLUSTER
   */
  haMigrateType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-bp1bl7iqzka******
   */
  haStandby?: string;
  /**
   * @example
   * hb-bp1w6krp539******-master1-001.hbase.singapore.rds.aliyuncs.com,hb-bp1w6krp539******-master3-001.hbase.singapore.rds.aliyuncs.com,hb-t4naqsay5gn******-master2-001.hbase.singapore.rds.aliyuncs.com:2181:/hbase
   */
  haStandbyClusterKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbase
   */
  haStandbyDBType?: string;
  /**
   * @example
   * /hbase
   */
  haStandbyHbaseFsDir?: string;
  /**
   * @example
   * hdfs://hb-bp1w6krp539******-master1-001.hbase.rds.aliyuncs.com:8020,hb-bp1w6krp539******-master2-001.hbase.rds.aliyuncs.com:8020
   */
  haStandbyHdfsUri?: string;
  /**
   * @example
   * root
   */
  haStandbyPassword?: string;
  /**
   * @example
   * root
   */
  haStandbyUser?: string;
  /**
   * @example
   * HBase2x
   */
  haStandbyVersion?: string;
  /**
   * @example
   * test,test1
   */
  haTables?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  isActiveStandard?: boolean;
  /**
   * @remarks
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


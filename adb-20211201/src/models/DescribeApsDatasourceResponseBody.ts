// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsDatasourceResponseBodyApsDatasourceDatabricksInfo extends $dara.Model {
  /**
   * @remarks
   * The token that is used to access Databricks.
   * 
   * @example
   * ******
   */
  accessToken?: string;
  /**
   * @remarks
   * The URL of the workspace.
   * 
   * @example
   * -
   */
  workspaceURL?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      workspaceURL: 'workspaceURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      workspaceURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApsDatasourceResponseBodyApsDatasourceHiveInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the E-MapReduce (EMR) cluster.
   * 
   * @example
   * -
   */
  emrClusterId?: string;
  /**
   * @remarks
   * The URL of the Hive Metastore.
   * 
   * @example
   * -
   */
  metaStoreUri?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-******
   */
  securityGroup?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-******
   */
  vswitch?: string;
  static names(): { [key: string]: string } {
    return {
      emrClusterId: 'EmrClusterId',
      metaStoreUri: 'MetaStoreUri',
      securityGroup: 'SecurityGroup',
      vswitch: 'Vswitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emrClusterId: 'string',
      metaStoreUri: 'string',
      securityGroup: 'string',
      vswitch: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApsDatasourceResponseBodyApsDatasourceKafkaInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the Kafka instance.
   * 
   * @example
   * -
   */
  kafkaClusterId?: string;
  /**
   * @remarks
   * The topic of the Kafka instance.
   * 
   * @example
   * [{\\"value\\": \\"hongxian_test\\"}]
   */
  kafkaTopic?: string;
  static names(): { [key: string]: string } {
    return {
      kafkaClusterId: 'KafkaClusterId',
      kafkaTopic: 'KafkaTopic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kafkaClusterId: 'string',
      kafkaTopic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApsDatasourceResponseBodyApsDatasourcePolarDBMysqlInfo extends $dara.Model {
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  across?: boolean;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  acrossRole?: string;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  acrossUid?: string;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  connectUrl?: string;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  instanceId?: string;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  regionId?: string;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  securityGroup?: string;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      across: 'Across',
      acrossRole: 'AcrossRole',
      acrossUid: 'AcrossUid',
      connectUrl: 'ConnectUrl',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      securityGroup: 'SecurityGroup',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      across: 'boolean',
      acrossRole: 'string',
      acrossUid: 'string',
      connectUrl: 'string',
      instanceId: 'string',
      regionId: 'string',
      securityGroup: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApsDatasourceResponseBodyApsDatasourceRdsMysqlInfo extends $dara.Model {
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  connectUrl?: string;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  instanceId?: string;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  regionId?: string;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  securityGroup?: string;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      connectUrl: 'ConnectUrl',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      securityGroup: 'SecurityGroup',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectUrl: 'string',
      instanceId: 'string',
      regionId: 'string',
      securityGroup: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApsDatasourceResponseBodyApsDatasourceSlsInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the data source is a cross-account resource. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  across?: boolean;
  /**
   * @remarks
   * The name of the cross-account role.
   * 
   * @example
   * test
   */
  acrossRole?: string;
  /**
   * @remarks
   * The cross-account UID.
   * 
   * @example
   * 123456
   */
  acrossUid?: string;
  /**
   * @remarks
   * The name of the SLS project.
   * 
   * @example
   * ***
   */
  project?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  sourceRegionId?: string;
  /**
   * @remarks
   * The name of the SLS Logstore.
   * 
   * @example
   * ***
   */
  store?: string;
  static names(): { [key: string]: string } {
    return {
      across: 'Across',
      acrossRole: 'AcrossRole',
      acrossUid: 'AcrossUid',
      project: 'Project',
      sourceRegionId: 'SourceRegionId',
      store: 'Store',
    };
  }

  static types(): { [key: string]: any } {
    return {
      across: 'boolean',
      acrossRole: 'string',
      acrossUid: 'string',
      project: 'string',
      sourceRegionId: 'string',
      store: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApsDatasourceResponseBodyApsDatasource extends $dara.Model {
  /**
   * @remarks
   * The time when the data source was created.
   * 
   * @example
   * 2024-04-12T15:03:38Z
   */
  createTime?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The information about Databricks.
   * 
   * @example
   * -
   */
  databricksInfo?: DescribeApsDatasourceResponseBodyApsDatasourceDatabricksInfo;
  /**
   * @remarks
   * The description of the data source.
   * 
   * @example
   * test
   */
  datasourceDescription?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * kafka-2024***
   */
  datasourceName?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * KAFKA
   */
  datasourceType?: string;
  /**
   * @remarks
   * The information about the Hive data source.
   * 
   * @example
   * -
   */
  hiveInfo?: DescribeApsDatasourceResponseBodyApsDatasourceHiveInfo;
  /**
   * @remarks
   * The information about the Kafka instance.
   * 
   * @example
   * -
   */
  kafkaInfo?: DescribeApsDatasourceResponseBodyApsDatasourceKafkaInfo;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  polarDBMysqlInfo?: DescribeApsDatasourceResponseBodyApsDatasourcePolarDBMysqlInfo;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  rdsMysqlInfo?: DescribeApsDatasourceResponseBodyApsDatasourceRdsMysqlInfo;
  /**
   * @remarks
   * The Simple Log Service (SLS) project.
   * 
   * @example
   * -
   */
  slsInfo?: DescribeApsDatasourceResponseBodyApsDatasourceSlsInfo;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      DBClusterId: 'DBClusterId',
      databricksInfo: 'DatabricksInfo',
      datasourceDescription: 'DatasourceDescription',
      datasourceName: 'DatasourceName',
      datasourceType: 'DatasourceType',
      hiveInfo: 'HiveInfo',
      kafkaInfo: 'KafkaInfo',
      polarDBMysqlInfo: 'PolarDBMysqlInfo',
      rdsMysqlInfo: 'RdsMysqlInfo',
      slsInfo: 'SlsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      DBClusterId: 'string',
      databricksInfo: DescribeApsDatasourceResponseBodyApsDatasourceDatabricksInfo,
      datasourceDescription: 'string',
      datasourceName: 'string',
      datasourceType: 'string',
      hiveInfo: DescribeApsDatasourceResponseBodyApsDatasourceHiveInfo,
      kafkaInfo: DescribeApsDatasourceResponseBodyApsDatasourceKafkaInfo,
      polarDBMysqlInfo: DescribeApsDatasourceResponseBodyApsDatasourcePolarDBMysqlInfo,
      rdsMysqlInfo: DescribeApsDatasourceResponseBodyApsDatasourceRdsMysqlInfo,
      slsInfo: DescribeApsDatasourceResponseBodyApsDatasourceSlsInfo,
    };
  }

  validate() {
    if(this.databricksInfo && typeof (this.databricksInfo as any).validate === 'function') {
      (this.databricksInfo as any).validate();
    }
    if(this.hiveInfo && typeof (this.hiveInfo as any).validate === 'function') {
      (this.hiveInfo as any).validate();
    }
    if(this.kafkaInfo && typeof (this.kafkaInfo as any).validate === 'function') {
      (this.kafkaInfo as any).validate();
    }
    if(this.polarDBMysqlInfo && typeof (this.polarDBMysqlInfo as any).validate === 'function') {
      (this.polarDBMysqlInfo as any).validate();
    }
    if(this.rdsMysqlInfo && typeof (this.rdsMysqlInfo as any).validate === 'function') {
      (this.rdsMysqlInfo as any).validate();
    }
    if(this.slsInfo && typeof (this.slsInfo as any).validate === 'function') {
      (this.slsInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApsDatasourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried APS data source.
   */
  apsDatasource?: DescribeApsDatasourceResponseBodyApsDatasource;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******-**D8-5***-A***-****587
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apsDatasource: 'ApsDatasource',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apsDatasource: DescribeApsDatasourceResponseBodyApsDatasource,
      requestId: 'string',
    };
  }

  validate() {
    if(this.apsDatasource && typeof (this.apsDatasource as any).validate === 'function') {
      (this.apsDatasource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


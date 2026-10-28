// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsDatasourceResponseBodyApsDatasourceDatabricksInfo extends $dara.Model {
  /**
   * @remarks
   * The token used to access Databricks.
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
   * The Hive metastore URL.
   * 
   * @example
   * -
   */
  metaStoreUri?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-******
   */
  securityGroup?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
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
   * The Kafka instance ID.
   * 
   * @example
   * -
   */
  kafkaClusterId?: string;
  /**
   * @remarks
   * kafka topic
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
   * -
   * 
   * @example
   * -
   */
  across?: boolean;
  /**
   * @remarks
   * -
   * 
   * @example
   * -
   */
  acrossRole?: string;
  /**
   * @remarks
   * -
   * 
   * @example
   * -
   */
  acrossUid?: string;
  /**
   * @remarks
   * -
   * 
   * @example
   * -
   */
  connectUrl?: string;
  /**
   * @remarks
   * -
   * 
   * @example
   * -
   */
  instanceId?: string;
  /**
   * @remarks
   * -
   * 
   * @example
   * -
   */
  regionId?: string;
  /**
   * @remarks
   * -
   * 
   * @example
   * -
   */
  securityGroup?: string;
  /**
   * @remarks
   * -
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
   * -
   * 
   * @example
   * -
   */
  connectUrl?: string;
  /**
   * @remarks
   * -
   * 
   * @example
   * -
   */
  instanceId?: string;
  /**
   * @remarks
   * -
   * 
   * @example
   * -
   */
  regionId?: string;
  /**
   * @remarks
   * -
   * 
   * @example
   * -
   */
  securityGroup?: string;
  /**
   * @remarks
   * -
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
   * Specifies whether the resource is cross-account. Valid values:
   * 
   * - **true**: The current network instance is a cross-account resource.
   * - **false**: The current network instance belongs to the current account.
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
   * The ID of the region to which the production site belongs.
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
   * The creation time. The time is displayed in UTC and follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2024-04-12T15:03:38Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * amv-******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The Databricks information.
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
   * The Hive data source information.
   * 
   * @example
   * -
   */
  hiveInfo?: DescribeApsDatasourceResponseBodyApsDatasourceHiveInfo;
  /**
   * @remarks
   * The Kafka instance information.
   * 
   * @example
   * -
   */
  kafkaInfo?: DescribeApsDatasourceResponseBodyApsDatasourceKafkaInfo;
  /**
   * @remarks
   * This parameter is no longer supported.
   * 
   * @example
   * -
   */
  polarDBMysqlInfo?: DescribeApsDatasourceResponseBodyApsDatasourcePolarDBMysqlInfo;
  /**
   * @remarks
   * This parameter is no longer supported.
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
   * -
   */
  apsDatasource?: DescribeApsDatasourceResponseBodyApsDatasource;
  /**
   * @remarks
   * The ID of the request.
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


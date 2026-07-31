// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApsDatasoureRequestDatabricksInfo extends $dara.Model {
  /**
   * @remarks
   * The access token.
   * 
   * @example
   * ******
   */
  accessToken?: string;
  /**
   * @remarks
   * The workspace URL.
   * 
   * @example
   * xxxxx
   */
  workspaceURL?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      workspaceURL: 'WorkspaceURL',
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

export class CreateApsDatasoureRequestHiveInfo extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ******
   */
  clusterId?: string;
  /**
   * @remarks
   * The host configuration.
   * 
   * @example
   * ******
   */
  hostConfig?: string;
  /**
   * @remarks
   * The MetaStore endpoint.
   * 
   * @example
   * ******
   */
  metaStoreUri?: string;
  /**
   * @remarks
   * The security group.
   * 
   * @example
   * sg-uf*******h
   */
  securityGroup?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1*****k
   */
  vswitch?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      hostConfig: 'HostConfig',
      metaStoreUri: 'MetaStoreUri',
      securityGroup: 'SecurityGroup',
      vswitch: 'Vswitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      hostConfig: 'string',
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

export class CreateApsDatasoureRequestKafkaInfo extends $dara.Model {
  /**
   * @remarks
   * The Kafka instance ID.
   * 
   * @example
   * ******
   */
  kafkaClusterId?: string;
  /**
   * @remarks
   * The assigned Kafka topic name.
   * 
   * @example
   * test
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

export class CreateApsDatasoureRequestPolarDBMysqlInfo extends $dara.Model {
  /**
   * @remarks
   * Specifies whether cross-account access is enabled. Valid values:
   * 
   * - **true**: The current network instance is a cross-account resource.
   * - **false**: The current network instance is a resource within the current account.
   * 
   * @example
   * false
   */
  across?: boolean;
  /**
   * @remarks
   * The cross-account role.
   * 
   * @example
   * test-role
   */
  acrossRole?: string;
  /**
   * @remarks
   * The UID of the cross-account.
   * 
   * @example
   * 123456789*
   */
  acrossUid?: string;
  /**
   * @remarks
   * The custom RDS endpoint.
   * 
   * @example
   * ****
   */
  connectUrl?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pc-bp*********
   */
  instanceId?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * ***
   */
  password?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The security group.
   * 
   * @example
   * sg-******
   */
  securityGroup?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test-user-name
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      across: 'Across',
      acrossRole: 'AcrossRole',
      acrossUid: 'AcrossUid',
      connectUrl: 'ConnectUrl',
      instanceId: 'InstanceId',
      password: 'Password',
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
      password: 'string',
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

export class CreateApsDatasoureRequestPolarDBXInfo extends $dara.Model {
  /**
   * @remarks
   * The OceanBase cluster ID.
   * 
   * @example
   * -
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApsDatasoureRequestRdsMysqlInfo extends $dara.Model {
  /**
   * @remarks
   * The read-only instance endpoint.
   * 
   * @example
   * ******
   */
  connectUrl?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-xxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * ******
   */
  password?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The security group.
   * 
   * @example
   * sg-******
   */
  securityGroup?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * Username.
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      connectUrl: 'ConnectUrl',
      instanceId: 'InstanceId',
      password: 'Password',
      regionId: 'RegionId',
      securityGroup: 'SecurityGroup',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectUrl: 'string',
      instanceId: 'string',
      password: 'string',
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

export class CreateApsDatasoureRequestSlsInfo extends $dara.Model {
  /**
   * @remarks
   * Specifies whether cross-account access is enabled.
   * 
   * @example
   * false
   */
  across?: boolean;
  /**
   * @remarks
   * The role name for cross-account access.
   * 
   * @example
   * yyy
   */
  acrossRole?: string;
  /**
   * @remarks
   * The UID of the cross-account.
   * 
   * @example
   * xxxx
   */
  acrossUid?: string;
  /**
   * @remarks
   * The Simple Log Service (SLS) project.
   * 
   * @example
   * test-project
   */
  project?: string;
  /**
   * @remarks
   * The region ID of the source cluster.
   * 
   * @example
   * cn-beijing
   */
  sourceRegionId?: string;
  /**
   * @remarks
   * sls logstore。
   * 
   * @example
   * test-store
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

export class CreateApsDatasoureRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-xxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The Databricks data source information.
   * 
   * @example
   * -
   */
  databricksInfo?: CreateApsDatasoureRequestDatabricksInfo;
  /**
   * @remarks
   * The data source description.
   * 
   * @example
   * description
   */
  datasourceDescription?: string;
  /**
   * @remarks
   * The data source name.
   * 
   * This parameter is required.
   * 
   * @example
   * sls-******
   */
  datasourceName?: string;
  /**
   * @remarks
   * The data source type.
   * 
   * This parameter is required.
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
  hiveInfo?: CreateApsDatasoureRequestHiveInfo;
  /**
   * @remarks
   * The Kafka information.
   * 
   * @example
   * -
   */
  kafkaInfo?: CreateApsDatasoureRequestKafkaInfo;
  /**
   * @remarks
   * The mode.
   * 
   * @example
   * ALI_CLOUD_INSTANCE
   */
  mode?: string;
  /**
   * @remarks
   * The PolarDB for MySQL data source information.
   * 
   * @example
   * -
   */
  polarDBMysqlInfo?: CreateApsDatasoureRequestPolarDBMysqlInfo;
  /**
   * @remarks
   * The PolarDB-X data source information.
   * 
   * @example
   * -
   */
  polarDBXInfo?: CreateApsDatasoureRequestPolarDBXInfo;
  /**
   * @remarks
   * The ApsaraDB RDS for MySQL data source information.
   * 
   * @example
   * -
   */
  rdsMysqlInfo?: CreateApsDatasoureRequestRdsMysqlInfo;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The Simple Log Service (SLS) information for the data source to be created.
   * 
   * @example
   * -
   */
  slsInfo?: CreateApsDatasoureRequestSlsInfo;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      databricksInfo: 'DatabricksInfo',
      datasourceDescription: 'DatasourceDescription',
      datasourceName: 'DatasourceName',
      datasourceType: 'DatasourceType',
      hiveInfo: 'HiveInfo',
      kafkaInfo: 'KafkaInfo',
      mode: 'Mode',
      polarDBMysqlInfo: 'PolarDBMysqlInfo',
      polarDBXInfo: 'PolarDBXInfo',
      rdsMysqlInfo: 'RdsMysqlInfo',
      regionId: 'RegionId',
      slsInfo: 'SlsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      databricksInfo: CreateApsDatasoureRequestDatabricksInfo,
      datasourceDescription: 'string',
      datasourceName: 'string',
      datasourceType: 'string',
      hiveInfo: CreateApsDatasoureRequestHiveInfo,
      kafkaInfo: CreateApsDatasoureRequestKafkaInfo,
      mode: 'string',
      polarDBMysqlInfo: CreateApsDatasoureRequestPolarDBMysqlInfo,
      polarDBXInfo: CreateApsDatasoureRequestPolarDBXInfo,
      rdsMysqlInfo: CreateApsDatasoureRequestRdsMysqlInfo,
      regionId: 'string',
      slsInfo: CreateApsDatasoureRequestSlsInfo,
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
    if(this.polarDBXInfo && typeof (this.polarDBXInfo as any).validate === 'function') {
      (this.polarDBXInfo as any).validate();
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApsDatasoureRequestKafkaInfo extends $dara.Model {
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
   * test-topic
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

export class ModifyApsDatasoureRequestLakehouseId extends $dara.Model {
  /**
   * @remarks
   * The name of the security group.
   * 
   * @example
   * sg-******
   */
  securityGroup?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-******
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * vsw-******
   */
  vswitch?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroup: 'SecurityGroup',
      vpcId: 'VpcId',
      vswitch: 'Vswitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroup: 'string',
      vpcId: 'string',
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

export class ModifyApsDatasoureRequestPolarDBMysqlInfo extends $dara.Model {
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
  password?: string;
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
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      connectUrl: 'ConnectUrl',
      password: 'Password',
      regionId: 'RegionId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectUrl: 'string',
      password: 'string',
      regionId: 'string',
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

export class ModifyApsDatasoureRequestRdsMysqlInfo extends $dara.Model {
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
  password?: string;
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
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      connectUrl: 'ConnectUrl',
      password: 'Password',
      regionId: 'RegionId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectUrl: 'string',
      password: 'string',
      regionId: 'string',
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

export class ModifyApsDatasoureRequestSlsInfo extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use a cross-account resource as the data source. Valid values:
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
   * test-role
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
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  sourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      across: 'Across',
      acrossRole: 'AcrossRole',
      acrossUid: 'AcrossUid',
      sourceRegionId: 'SourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      across: 'boolean',
      acrossRole: 'string',
      acrossUid: 'string',
      sourceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApsDatasoureRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-*******
   */
  DBClusterId?: string;
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
   * The data source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  datasourceId?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * sls-******
   */
  datasourceName?: string;
  /**
   * @remarks
   * The information about the Kafka instance.
   * 
   * @example
   * -
   */
  kafkaInfo?: ModifyApsDatasoureRequestKafkaInfo;
  /**
   * @remarks
   * The lakehouse ID.
   * 
   * @example
   * 123
   */
  lakehouseId?: ModifyApsDatasoureRequestLakehouseId;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  polarDBMysqlInfo?: ModifyApsDatasoureRequestPolarDBMysqlInfo;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  rdsMysqlInfo?: ModifyApsDatasoureRequestRdsMysqlInfo;
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
   * The information about Simple Log Service (SLS).
   * 
   * @example
   * -
   */
  slsInfo?: ModifyApsDatasoureRequestSlsInfo;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      datasourceDescription: 'DatasourceDescription',
      datasourceId: 'DatasourceId',
      datasourceName: 'DatasourceName',
      kafkaInfo: 'KafkaInfo',
      lakehouseId: 'LakehouseId',
      polarDBMysqlInfo: 'PolarDBMysqlInfo',
      rdsMysqlInfo: 'RdsMysqlInfo',
      regionId: 'RegionId',
      slsInfo: 'SlsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      datasourceDescription: 'string',
      datasourceId: 'number',
      datasourceName: 'string',
      kafkaInfo: ModifyApsDatasoureRequestKafkaInfo,
      lakehouseId: ModifyApsDatasoureRequestLakehouseId,
      polarDBMysqlInfo: ModifyApsDatasoureRequestPolarDBMysqlInfo,
      rdsMysqlInfo: ModifyApsDatasoureRequestRdsMysqlInfo,
      regionId: 'string',
      slsInfo: ModifyApsDatasoureRequestSlsInfo,
    };
  }

  validate() {
    if(this.kafkaInfo && typeof (this.kafkaInfo as any).validate === 'function') {
      (this.kafkaInfo as any).validate();
    }
    if(this.lakehouseId && typeof (this.lakehouseId as any).validate === 'function') {
      (this.lakehouseId as any).validate();
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


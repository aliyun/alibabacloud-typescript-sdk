// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApsDatasoureRequestKafkaInfo extends $dara.Model {
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
   * The Kafka topic name.
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
   * The security group name.
   * 
   * @example
   * sg-******
   */
  securityGroup?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-******
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch name.
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
  password?: string;
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
  password?: string;
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
   * Specifies whether the resource is cross-account. Valid values:
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
   * The cross-account UID.
   * 
   * @example
   * 123456
   */
  acrossUid?: string;
  /**
   * @remarks
   * The source region ID.
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
   * The data source description.
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
   * The data source name.
   * 
   * @example
   * sls-******
   */
  datasourceName?: string;
  /**
   * @remarks
   * The Kafka data source information.
   * 
   * @example
   * {"KafkaTopic":"test-topic"}
   */
  kafkaInfo?: ModifyApsDatasoureRequestKafkaInfo;
  /**
   * @remarks
   * The Lakehouse ID.
   * 
   * @example
   * {"VpcId":"vpc-******"}
   */
  lakehouseId?: ModifyApsDatasoureRequestLakehouseId;
  /**
   * @remarks
   * The deprecated data source information.
   * 
   * @example
   * -
   */
  polarDBMysqlInfo?: ModifyApsDatasoureRequestPolarDBMysqlInfo;
  /**
   * @remarks
   * The deprecated data source information.
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
   * The Simple Log Service (SLS) information.
   * 
   * @example
   * {"Project":"example-project","Store":"example-logstore","Across":false}
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


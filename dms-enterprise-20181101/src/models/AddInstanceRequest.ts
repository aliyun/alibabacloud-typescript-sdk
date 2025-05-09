// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddInstanceRequest extends $dara.Model {
  /**
   * @example
   * dblink_test
   */
  dataLinkName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test***
   */
  databasePassword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testsdb
   */
  databaseUser?: string;
  /**
   * @example
   * 27****
   */
  dbaId?: number;
  /**
   * @example
   * 2
   */
  ddlOnline?: number;
  /**
   * @example
   * i-2zei9gs1t7h8l7ac****
   */
  ecsInstanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  ecsRegion?: string;
  /**
   * @example
   * Y
   */
  enableSellCommon?: string;
  /**
   * @example
   * Y
   */
  enableSellSitd?: string;
  /**
   * @example
   * NULL
   */
  enableSellStable?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Y
   */
  enableSellTrust?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * product
   */
  envType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 86400
   */
  exportTimeout?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 172.XX.XXX.254
   */
  host?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceAlias?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  instanceSource?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  instanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7200
   */
  queryTimeout?: number;
  safeRule?: string;
  /**
   * @example
   * testSid
   */
  sid?: string;
  /**
   * @example
   * false
   */
  skipTest?: boolean;
  /**
   * @example
   * 31***
   */
  templateId?: number;
  /**
   * @example
   * INNER
   */
  templateType?: string;
  /**
   * @example
   * 23****
   */
  tid?: number;
  /**
   * @example
   * 1
   */
  useDsql?: number;
  useSsl?: number;
  /**
   * @example
   * vpc-2zef4o1hu7ljd****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      dataLinkName: 'DataLinkName',
      databasePassword: 'DatabasePassword',
      databaseUser: 'DatabaseUser',
      dbaId: 'DbaId',
      ddlOnline: 'DdlOnline',
      ecsInstanceId: 'EcsInstanceId',
      ecsRegion: 'EcsRegion',
      enableSellCommon: 'EnableSellCommon',
      enableSellSitd: 'EnableSellSitd',
      enableSellStable: 'EnableSellStable',
      enableSellTrust: 'EnableSellTrust',
      envType: 'EnvType',
      exportTimeout: 'ExportTimeout',
      host: 'Host',
      instanceAlias: 'InstanceAlias',
      instanceSource: 'InstanceSource',
      instanceType: 'InstanceType',
      networkType: 'NetworkType',
      port: 'Port',
      queryTimeout: 'QueryTimeout',
      safeRule: 'SafeRule',
      sid: 'Sid',
      skipTest: 'SkipTest',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
      tid: 'Tid',
      useDsql: 'UseDsql',
      useSsl: 'UseSsl',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataLinkName: 'string',
      databasePassword: 'string',
      databaseUser: 'string',
      dbaId: 'number',
      ddlOnline: 'number',
      ecsInstanceId: 'string',
      ecsRegion: 'string',
      enableSellCommon: 'string',
      enableSellSitd: 'string',
      enableSellStable: 'string',
      enableSellTrust: 'string',
      envType: 'string',
      exportTimeout: 'number',
      host: 'string',
      instanceAlias: 'string',
      instanceSource: 'string',
      instanceType: 'string',
      networkType: 'string',
      port: 'number',
      queryTimeout: 'number',
      safeRule: 'string',
      sid: 'string',
      skipTest: 'boolean',
      templateId: 'number',
      templateType: 'string',
      tid: 'number',
      useDsql: 'number',
      useSsl: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


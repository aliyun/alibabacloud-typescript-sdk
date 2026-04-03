// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFunagentInput extends $dara.Model {
  /**
   * @remarks
   * `string`，必填
   * 
   * This parameter is required.
   */
  adminName?: string;
  /**
   * @remarks
   * `string`，必填
   * 
   * This parameter is required.
   */
  adminSecret?: string;
  /**
   * @remarks
   * `float64`，必填
   * 
   * This parameter is required.
   */
  cpu?: number;
  /**
   * @remarks
   * `int32`，必填
   * 
   * This parameter is required.
   */
  dbConnections?: number;
  /**
   * @remarks
   * `string`，必填
   * 
   * This parameter is required.
   */
  dbHost?: string;
  /**
   * @remarks
   * `string`，必填
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * `string`，必填
   * 
   * This parameter is required.
   */
  dbName?: string;
  /**
   * @remarks
   * `string`，必填
   * 
   * This parameter is required.
   */
  dbPassword?: string;
  /**
   * @remarks
   * `int32`，必填
   * 
   * This parameter is required.
   */
  dbPort?: number;
  /**
   * @remarks
   * `string`，必填
   * 
   * This parameter is required.
   */
  dbType?: string;
  /**
   * @remarks
   * `string`，必填
   * 
   * This parameter is required.
   */
  dbUsername?: string;
  /**
   * @remarks
   * `string`，必填
   * 
   * This parameter is required.
   */
  description?: string;
  /**
   * @remarks
   * `string`，必填
   * 
   * This parameter is required.
   */
  funAgentName?: string;
  /**
   * @remarks
   * `int32`，必填
   * 
   * This parameter is required.
   */
  memory?: number;
  /**
   * @remarks
   * 可选； `omitempty`
   */
  regionId?: string;
  /**
   * @remarks
   * `int32`，必填
   * 
   * This parameter is required.
   */
  replicas?: number;
  /**
   * @remarks
   * `string`，必填
   * 
   * This parameter is required.
   */
  securityGroupId?: string;
  /**
   * @remarks
   * `string`，必填
   * 
   * This parameter is required.
   */
  vpcId?: string;
  /**
   * @remarks
   * `string`，必填；JSON 数组 [{vswitchId, zoneId}]（core 解码为 `*string` 但校验非空）
   * 
   * This parameter is required.
   */
  vswitchIds?: string;
  static names(): { [key: string]: string } {
    return {
      adminName: 'adminName',
      adminSecret: 'adminSecret',
      cpu: 'cpu',
      dbConnections: 'dbConnections',
      dbHost: 'dbHost',
      dbInstanceId: 'dbInstanceId',
      dbName: 'dbName',
      dbPassword: 'dbPassword',
      dbPort: 'dbPort',
      dbType: 'dbType',
      dbUsername: 'dbUsername',
      description: 'description',
      funAgentName: 'funAgentName',
      memory: 'memory',
      regionId: 'regionId',
      replicas: 'replicas',
      securityGroupId: 'securityGroupId',
      vpcId: 'vpcId',
      vswitchIds: 'vswitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminName: 'string',
      adminSecret: 'string',
      cpu: 'number',
      dbConnections: 'number',
      dbHost: 'string',
      dbInstanceId: 'string',
      dbName: 'string',
      dbPassword: 'string',
      dbPort: 'number',
      dbType: 'string',
      dbUsername: 'string',
      description: 'string',
      funAgentName: 'string',
      memory: 'number',
      regionId: 'string',
      replicas: 'number',
      securityGroupId: 'string',
      vpcId: 'string',
      vswitchIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


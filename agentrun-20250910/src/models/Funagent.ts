// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Funagent extends $dara.Model {
  adminName?: string;
  /**
   * @remarks
   * 敏感；响应中应脱敏
   */
  adminSecret?: string;
  cpu?: number;
  /**
   * @remarks
   * ISO 8601
   */
  createdAt?: string;
  dbConnections?: number;
  dbHost?: string;
  dbName?: string;
  /**
   * @remarks
   * 敏感；响应中应脱敏
   */
  dbPassword?: string;
  dbPort?: number;
  dbType?: string;
  dbUsername?: string;
  description?: string;
  endpoint?: string;
  /**
   * @remarks
   * UUID 字符串
   */
  funagentId?: string;
  funagentName?: string;
  imageUrl?: string;
  memory?: number;
  regionId?: string;
  replicas?: number;
  securityGroupId?: string;
  status?: string;
  tenantId?: string;
  /**
   * @remarks
   * ISO 8601
   */
  updatedAt?: string;
  version?: string;
  vpcId?: string;
  /**
   * @remarks
   * 与存储一致时为 JSON 字符串
   */
  vswitchIds?: string;
  static names(): { [key: string]: string } {
    return {
      adminName: 'adminName',
      adminSecret: 'adminSecret',
      cpu: 'cpu',
      createdAt: 'createdAt',
      dbConnections: 'dbConnections',
      dbHost: 'dbHost',
      dbName: 'dbName',
      dbPassword: 'dbPassword',
      dbPort: 'dbPort',
      dbType: 'dbType',
      dbUsername: 'dbUsername',
      description: 'description',
      endpoint: 'endpoint',
      funagentId: 'funagentId',
      funagentName: 'funagentName',
      imageUrl: 'imageUrl',
      memory: 'memory',
      regionId: 'regionId',
      replicas: 'replicas',
      securityGroupId: 'securityGroupId',
      status: 'status',
      tenantId: 'tenantId',
      updatedAt: 'updatedAt',
      version: 'version',
      vpcId: 'vpcId',
      vswitchIds: 'vswitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminName: 'string',
      adminSecret: 'string',
      cpu: 'number',
      createdAt: 'string',
      dbConnections: 'number',
      dbHost: 'string',
      dbName: 'string',
      dbPassword: 'string',
      dbPort: 'number',
      dbType: 'string',
      dbUsername: 'string',
      description: 'string',
      endpoint: 'string',
      funagentId: 'string',
      funagentName: 'string',
      imageUrl: 'string',
      memory: 'number',
      regionId: 'string',
      replicas: 'number',
      securityGroupId: 'string',
      status: 'string',
      tenantId: 'string',
      updatedAt: 'string',
      version: 'string',
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


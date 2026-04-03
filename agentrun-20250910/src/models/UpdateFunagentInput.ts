// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFunagentInput extends $dara.Model {
  adminName?: string;
  /**
   * @remarks
   * 敏感字段
   */
  adminSecret?: string;
  cpu?: number;
  dbConnections?: number;
  dbHost?: string;
  dbInstanceId?: string;
  dbName?: string;
  /**
   * @remarks
   * 敏感字段
   */
  dbPassword?: string;
  dbPort?: number;
  dbType?: string;
  dbUsername?: string;
  description?: string;
  memory?: number;
  replicas?: number;
  version?: string;
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
      memory: 'memory',
      replicas: 'replicas',
      version: 'version',
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
      memory: 'number',
      replicas: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


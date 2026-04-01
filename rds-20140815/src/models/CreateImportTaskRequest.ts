// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rm-bp1u*****ggm7j9j
   */
  dbInstanceId?: string;
  /**
   * @example
   * 1000
   */
  estimatedSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 172.20.246.90
   */
  host?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OEF5JjVOM2pzZXFKRw==
   */
  password?: string;
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
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * i-bp1fe296n52ub3chezpg
   */
  sourceInstanceId?: string;
  /**
   * @example
   * ECS
   */
  sourcePlatform?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9999
   */
  streamPort?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * myadmin
   */
  user?: string;
  /**
   * @example
   * /usr/bin/xtrabackup
   */
  xtrabackupPath?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      estimatedSize: 'EstimatedSize',
      host: 'Host',
      ownerId: 'OwnerId',
      password: 'Password',
      port: 'Port',
      regionId: 'RegionId',
      sourceInstanceId: 'SourceInstanceId',
      sourcePlatform: 'SourcePlatform',
      streamPort: 'StreamPort',
      user: 'User',
      xtrabackupPath: 'XtrabackupPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'string',
      estimatedSize: 'number',
      host: 'string',
      ownerId: 'number',
      password: 'string',
      port: 'number',
      regionId: 'string',
      sourceInstanceId: 'string',
      sourcePlatform: 'string',
      streamPort: 'number',
      user: 'string',
      xtrabackupPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


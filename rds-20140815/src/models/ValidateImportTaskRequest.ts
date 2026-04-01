// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateImportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rm-sdfljk123****
   */
  dbInstanceId?: string;
  /**
   * @example
   * 100
   */
  estimatedSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 192.168.10.1
   */
  host?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UGFzc3dvcmQxMjMK
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
   * i-wz9ff3acy500io5wdf5s
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
   * /usr/local/bin/xtrabackup
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


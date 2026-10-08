// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateImportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-sdfljk123****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The estimated instance size. Unit: GB.
   * 
   * @example
   * 100
   */
  estimatedSize?: number;
  /**
   * @remarks
   * The address of the source MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.10.1
   */
  host?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password of the source MySQL user, encoded in Base64.
   * 
   * This parameter is required.
   * 
   * @example
   * UGFzc3dvcmQxMjMK
   */
  password?: string;
  /**
   * @remarks
   * The port number of the source MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the source cloud instance.
   * 
   * @example
   * i-wz9ff3acy500io5wdf5s
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * The type of the source instance. Valid values:
   * - ECS
   * 
   * @example
   * ECS
   */
  sourcePlatform?: string;
  /**
   * @remarks
   * The port number for backup transmission.
   * 
   * This parameter is required.
   * 
   * @example
   * 9999
   */
  streamPort?: number;
  /**
   * @remarks
   * The username of the source MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * myadmin
   */
  user?: string;
  /**
   * @remarks
   * The path of the Xtrabackup tool on the source instance.
   * 
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


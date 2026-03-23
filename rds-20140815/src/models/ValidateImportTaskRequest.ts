// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateImportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID. You can obtain the value of this parameter by invoking the DescribeDBInstances API.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-sdfljk123****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * Estimated instance size (GB)
   * 
   * @example
   * 100
   */
  estimatedSize?: number;
  /**
   * @remarks
   * Source MySQL host address
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
   * Password for the source MySQL user (Base64 encrypted)
   * 
   * This parameter is required.
   * 
   * @example
   * UGFzc3dvcmQxMjMK
   */
  password?: string;
  /**
   * @remarks
   * Source MySQL port number
   * 
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * Region ID. You can obtain this by invoking the DescribeRegions API.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Source cloud instance ID
   * 
   * @example
   * i-wz9ff3acy500io5wdf5s
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * Source platform type  
   * - ECS
   * 
   * @example
   * ECS
   */
  sourcePlatform?: string;
  /**
   * @remarks
   * Backup transfer port number
   * 
   * This parameter is required.
   * 
   * @example
   * 9999
   */
  streamPort?: number;
  /**
   * @remarks
   * Source MySQL user
   * 
   * This parameter is required.
   * 
   * @example
   * myadmin
   */
  user?: string;
  /**
   * @remarks
   * Path to the Xtrabackup tool on the source
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


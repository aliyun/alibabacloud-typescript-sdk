// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Snapshot extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10737418240
   */
  artifactDiskTotalSizeInB?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2147483648
   */
  artifactDiskUsedSizeInB?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 268435456
   */
  artifactMemCacheSizeInB?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3221225472
   */
  artifactMemTotalSizeInB?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1073741824
   */
  artifactMemUsedSizeInB?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2026-07-30T10:00:00Z
   */
  createdTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Snapshot for production environment
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10240
   */
  diskSizeMB?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  envs?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2026-08-29T10:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-function
   */
  functionName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sha256:0123456789abcdef
   */
  imageDigest?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/example/function
   */
  imageRepository?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3072
   */
  memoryMB?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * linux
   */
  osType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * production
   */
  qualifier?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /code/ready.sh
   */
  readyCommand?: string;
  /**
   * @example
   * 1
   */
  resolvedVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  snapshotId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * custom-test-session-id
   */
  sourceSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /code/start.sh
   */
  startCommand?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      artifactDiskTotalSizeInB: 'artifactDiskTotalSizeInB',
      artifactDiskUsedSizeInB: 'artifactDiskUsedSizeInB',
      artifactMemCacheSizeInB: 'artifactMemCacheSizeInB',
      artifactMemTotalSizeInB: 'artifactMemTotalSizeInB',
      artifactMemUsedSizeInB: 'artifactMemUsedSizeInB',
      cpu: 'cpu',
      createdTime: 'createdTime',
      description: 'description',
      diskSizeMB: 'diskSizeMB',
      envs: 'envs',
      expiredTime: 'expiredTime',
      functionName: 'functionName',
      imageDigest: 'imageDigest',
      imageRepository: 'imageRepository',
      memoryMB: 'memoryMB',
      osType: 'osType',
      qualifier: 'qualifier',
      readyCommand: 'readyCommand',
      resolvedVersion: 'resolvedVersion',
      snapshotId: 'snapshotId',
      sourceSessionId: 'sourceSessionId',
      startCommand: 'startCommand',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactDiskTotalSizeInB: 'number',
      artifactDiskUsedSizeInB: 'number',
      artifactMemCacheSizeInB: 'number',
      artifactMemTotalSizeInB: 'number',
      artifactMemUsedSizeInB: 'number',
      cpu: 'number',
      createdTime: 'string',
      description: 'string',
      diskSizeMB: 'number',
      envs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      expiredTime: 'string',
      functionName: 'string',
      imageDigest: 'string',
      imageRepository: 'string',
      memoryMB: 'number',
      osType: 'string',
      qualifier: 'string',
      readyCommand: 'string',
      resolvedVersion: 'string',
      snapshotId: 'string',
      sourceSessionId: 'string',
      startCommand: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.envs) {
      $dara.Model.validateMap(this.envs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


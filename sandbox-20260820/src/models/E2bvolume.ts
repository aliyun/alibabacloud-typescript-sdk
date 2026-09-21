// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgenticBucketVolumeConfig } from "./AgenticBucketVolumeConfig";
import { AgenticFSVolumeConfig } from "./AgenticFsvolumeConfig";
import { JuiceFSVolumeConfig } from "./JuiceFsvolumeConfig";
import { VolumeMountConfig } from "./VolumeMountConfig";
import { OSSVolumeConfig } from "./OssvolumeConfig";


export class E2BVolume extends $dara.Model {
  agenticBucketVolumeConfig?: AgenticBucketVolumeConfig;
  agenticFSVolumeConfig?: AgenticFSVolumeConfig;
  /**
   * @example
   * 2026-09-07T02:12:36.531000Z
   */
  createdAt?: string;
  juiceFSVolumeConfig?: JuiceFSVolumeConfig;
  mountConfig?: VolumeMountConfig;
  ossVolumeConfig?: OSSVolumeConfig;
  /**
   * @example
   * rg-****
   */
  resourceGroupID?: string;
  /**
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @example
   * 无
   */
  statusReason?: string;
  /**
   * @example
   * OSS
   */
  storageClass?: string;
  /**
   * @example
   * 9f5a1fe9-****
   */
  teamID?: string;
  /**
   * @example
   * 2026-09-07T03:48:05.274000Z
   */
  updatedAt?: string;
  /**
   * @example
   * 2000****
   */
  userID?: string;
  /**
   * @example
   * 25878d34-****
   */
  volumeID?: string;
  /**
   * @example
   * workspace
   */
  volumeName?: string;
  static names(): { [key: string]: string } {
    return {
      agenticBucketVolumeConfig: 'agenticBucketVolumeConfig',
      agenticFSVolumeConfig: 'agenticFSVolumeConfig',
      createdAt: 'createdAt',
      juiceFSVolumeConfig: 'juiceFSVolumeConfig',
      mountConfig: 'mountConfig',
      ossVolumeConfig: 'ossVolumeConfig',
      resourceGroupID: 'resourceGroupID',
      status: 'status',
      statusReason: 'statusReason',
      storageClass: 'storageClass',
      teamID: 'teamID',
      updatedAt: 'updatedAt',
      userID: 'userID',
      volumeID: 'volumeID',
      volumeName: 'volumeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agenticBucketVolumeConfig: AgenticBucketVolumeConfig,
      agenticFSVolumeConfig: AgenticFSVolumeConfig,
      createdAt: 'string',
      juiceFSVolumeConfig: JuiceFSVolumeConfig,
      mountConfig: VolumeMountConfig,
      ossVolumeConfig: OSSVolumeConfig,
      resourceGroupID: 'string',
      status: 'string',
      statusReason: 'string',
      storageClass: 'string',
      teamID: 'string',
      updatedAt: 'string',
      userID: 'string',
      volumeID: 'string',
      volumeName: 'string',
    };
  }

  validate() {
    if(this.agenticBucketVolumeConfig && typeof (this.agenticBucketVolumeConfig as any).validate === 'function') {
      (this.agenticBucketVolumeConfig as any).validate();
    }
    if(this.agenticFSVolumeConfig && typeof (this.agenticFSVolumeConfig as any).validate === 'function') {
      (this.agenticFSVolumeConfig as any).validate();
    }
    if(this.juiceFSVolumeConfig && typeof (this.juiceFSVolumeConfig as any).validate === 'function') {
      (this.juiceFSVolumeConfig as any).validate();
    }
    if(this.mountConfig && typeof (this.mountConfig as any).validate === 'function') {
      (this.mountConfig as any).validate();
    }
    if(this.ossVolumeConfig && typeof (this.ossVolumeConfig as any).validate === 'function') {
      (this.ossVolumeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


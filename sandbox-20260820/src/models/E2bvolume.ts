// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgenticBucketVolumeConfig } from "./AgenticBucketVolumeConfig";
import { AgenticFSVolumeConfig } from "./AgenticFsvolumeConfig";
import { JuiceFSVolumeConfig } from "./JuiceFsvolumeConfig";
import { VolumeMountConfig } from "./VolumeMountConfig";
import { OSSVolumeConfig } from "./OssvolumeConfig";


export class E2BVolume extends $dara.Model {
  /**
   * @remarks
   * The AgenticBucket volume configuration.
   */
  agenticBucketVolumeConfig?: AgenticBucketVolumeConfig;
  /**
   * @remarks
   * The AgenticFS volume configuration.
   */
  agenticFSVolumeConfig?: AgenticFSVolumeConfig;
  /**
   * @remarks
   * The time when the volume was created, in UTC. The time is in the yyyy-MM-ddTHH:mm:ss.SSSSSSZ format, with exactly 6 decimal places for fractional seconds (microsecond precision).
   * 
   * @example
   * 2026-09-07T02:12:36.531000Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The JuiceFS volume configuration.
   */
  juiceFSVolumeConfig?: JuiceFSVolumeConfig;
  /**
   * @remarks
   * The mount configuration.
   */
  mountConfig?: VolumeMountConfig;
  /**
   * @remarks
   * The OSS volume configuration.
   */
  ossVolumeConfig?: OSSVolumeConfig;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-****
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * The volume status. Valid values:
   * - AVAILABLE
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The status reason.
   * 
   * @example
   * None
   */
  statusReason?: string;
  /**
   * @remarks
   * The storage type. Valid values:
   * - OSS
   * - AGENTIC_FS
   * 
   * @example
   * OSS
   */
  storageClass?: string;
  /**
   * @remarks
   * The unique identifier of the team.
   * 
   * @example
   * 9f5a1fe9-****
   */
  teamID?: string;
  /**
   * @remarks
   * The time when the volume was last updated, in UTC. The time is in the yyyy-MM-ddTHH:mm:ss.SSSSSSZ format, with exactly 6 decimal places for fractional seconds (microsecond precision).
   * 
   * @example
   * 2026-09-07T03:48:05.274000Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The UID of the creator.
   * 
   * @example
   * 2000****
   */
  userID?: string;
  /**
   * @remarks
   * The unique identifier of the volume.
   * 
   * @example
   * 25878d34-****
   */
  volumeID?: string;
  /**
   * @remarks
   * The name, which is unique within the team.
   * 
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


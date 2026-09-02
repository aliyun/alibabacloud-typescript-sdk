// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgenticFSVolumeConfig } from "./AgenticFsvolumeConfig";
import { OSSVolumeConfig } from "./OssvolumeConfig";


export class E2BVolumeMountConfigVpcConfig extends $dara.Model {
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-xxxxxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The list of vSwitches.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-2ze4l2vyhej6a6dwapm4q
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'securityGroupId',
      vSwitchIds: 'vSwitchIds',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class E2BVolumeMountConfig extends $dara.Model {
  /**
   * @remarks
   * The RAM role that the user grants to the sandboxed container. After this role is set, the sandboxed container assumes the role to generate temporary access credentials. You can use the temporary access credentials of this role to mount storage in the sandboxed container, such as OSS and AgenticFS.
   * 
   * @example
   * acs:ram::1673427197867277:role/aliyunfcdefaultrole
   */
  role?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   */
  vpcConfig?: E2BVolumeMountConfigVpcConfig;
  static names(): { [key: string]: string } {
    return {
      role: 'role',
      vpcConfig: 'vpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      vpcConfig: E2BVolumeMountConfigVpcConfig,
    };
  }

  validate() {
    if(this.vpcConfig && typeof (this.vpcConfig as any).validate === 'function') {
      (this.vpcConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class E2BVolume extends $dara.Model {
  /**
   * @remarks
   * The AgenticFS configuration.
   */
  agenticFSVolumeConfig?: AgenticFSVolumeConfig;
  /**
   * @remarks
   * The time when the volume was created.
   * 
   * @example
   * 2026-07-10T11:05:55Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The mount configuration.
   */
  mountConfig?: E2BVolumeMountConfig;
  /**
   * @remarks
   * The OSS configuration.
   */
  ossVolumeConfig?: OSSVolumeConfig;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmwxqyrgwabcd
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * The status. Valid values:
   * - CREATING
   * - AVAILABLE
   * - ERROR
   * - DELETING
   * 
   * @example
   * CREATING
   */
  status?: string;
  /**
   * @remarks
   * The reason for the status.
   * 
   * @example
   * OK
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
   * 88a4c762-b0ce-4661-9413-578b2309e60f
   */
  teamID?: string;
  /**
   * @remarks
   * The time when the volume was last updated.
   * 
   * @example
   * 2026-07-10T11:05:55Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The UID of the creator.
   * 
   * @example
   * 2190856988355929
   */
  userID?: string;
  /**
   * @remarks
   * The unique identifier of the volume.
   * 
   * @example
   * 82c8c42e-cf7a-46d0-8b58-9024409c1579
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
      agenticFSVolumeConfig: 'agenticFSVolumeConfig',
      createdAt: 'createdAt',
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
      agenticFSVolumeConfig: AgenticFSVolumeConfig,
      createdAt: 'string',
      mountConfig: E2BVolumeMountConfig,
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
    if(this.agenticFSVolumeConfig && typeof (this.agenticFSVolumeConfig as any).validate === 'function') {
      (this.agenticFSVolumeConfig as any).validate();
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


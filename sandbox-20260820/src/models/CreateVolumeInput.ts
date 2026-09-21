// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgenticBucketVolumeConfig } from "./AgenticBucketVolumeConfig";
import { JuiceFSVolumeConfig } from "./JuiceFsvolumeConfig";
import { OSSVolumeConfig } from "./OssvolumeConfig";


export class CreateVolumeInputAgenticFSVolumeConfig extends $dara.Model {
  /**
   * @remarks
   * The groupID of the local directory.
   * 
   * @example
   * 1000
   */
  groupID?: number;
  /**
   * @remarks
   * The Access Point endpoint address.
   * 
   * @example
   * ap-xxxx.xxxx-jnk89.cn-hangzhou.nas.aliyuncs.com:/
   */
  serverAddr?: string;
  /**
   * @remarks
   * The userID of the local directory.
   * 
   * @example
   * 1000
   */
  userID?: number;
  static names(): { [key: string]: string } {
    return {
      groupID: 'groupID',
      serverAddr: 'serverAddr',
      userID: 'userID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupID: 'number',
      serverAddr: 'string',
      userID: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVolumeInputMountConfigVpcConfig extends $dara.Model {
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-xxxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch IDs.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-****
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

export class CreateVolumeInputMountConfig extends $dara.Model {
  /**
   * @remarks
   * The permission role.
   * 
   * @example
   * acs:ram::1118555931230119:role/aliyunfcdefaultrole
   */
  role?: string;
  /**
   * @remarks
   * The VPC configuration.
   */
  vpcConfig?: CreateVolumeInputMountConfigVpcConfig;
  static names(): { [key: string]: string } {
    return {
      role: 'role',
      vpcConfig: 'vpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      vpcConfig: CreateVolumeInputMountConfigVpcConfig,
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

export class CreateVolumeInput extends $dara.Model {
  /**
   * @remarks
   * The AgenticBucket Volume configuration.
   */
  agenticBucketVolumeConfig?: AgenticBucketVolumeConfig;
  /**
   * @remarks
   * The AgenticFS Volume configuration.
   */
  agenticFSVolumeConfig?: CreateVolumeInputAgenticFSVolumeConfig;
  /**
   * @remarks
   * The JuiceFS Volume configuration.
   */
  juiceFSVolumeConfig?: JuiceFSVolumeConfig;
  /**
   * @remarks
   * The mount configuration.
   */
  mountConfig?: CreateVolumeInputMountConfig;
  /**
   * @remarks
   * The OSS Volume configuration.
   */
  ossVolumeConfig?: OSSVolumeConfig;
  /**
   * @remarks
   * The unique identifier of the team.
   * 
   * @example
   * 37ddc466-****
   */
  teamID?: string;
  /**
   * @remarks
   * The name, which must be unique within the team.
   * 
   * @example
   * workspace
   */
  volumeName?: string;
  static names(): { [key: string]: string } {
    return {
      agenticBucketVolumeConfig: 'agenticBucketVolumeConfig',
      agenticFSVolumeConfig: 'agenticFSVolumeConfig',
      juiceFSVolumeConfig: 'juiceFSVolumeConfig',
      mountConfig: 'mountConfig',
      ossVolumeConfig: 'ossVolumeConfig',
      teamID: 'teamID',
      volumeName: 'volumeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agenticBucketVolumeConfig: AgenticBucketVolumeConfig,
      agenticFSVolumeConfig: CreateVolumeInputAgenticFSVolumeConfig,
      juiceFSVolumeConfig: JuiceFSVolumeConfig,
      mountConfig: CreateVolumeInputMountConfig,
      ossVolumeConfig: OSSVolumeConfig,
      teamID: 'string',
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


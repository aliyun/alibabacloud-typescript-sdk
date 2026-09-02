// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgenticFSVolumeConfig } from "./AgenticFsvolumeConfig";
import { OSSVolumeConfig } from "./OssvolumeConfig";


export class CreateVolumeInputMountConfigVpcConfig extends $dara.Model {
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-xxxxxxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The list of vSwitches.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-8vbq8hbepimf6lr7uyqub
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
   * The RAM role that the user grants to the cloud sandbox. After this role is set, the cloud sandbox assumes the role to generate temporary access credentials. You can use the temporary access credentials of this role to mount storage in the cloud sandbox, such as OSS and AgenticFS.
   * 
   * @example
   * acs:ram::1338904783509062:role/aliyunfcdefaultrole
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
   * The AgenticFS configuration.
   */
  agenticFSVolumeConfig?: AgenticFSVolumeConfig;
  /**
   * @remarks
   * The mount configuration.
   */
  mountConfig?: CreateVolumeInputMountConfig;
  /**
   * @remarks
   * The OSS configuration.
   */
  ossVolumeConfig?: OSSVolumeConfig;
  /**
   * @remarks
   * The unique identifier of the team.
   * 
   * @example
   * 70d1c834-0383-58d8-97ac-5336eb91abcd
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
      agenticFSVolumeConfig: 'agenticFSVolumeConfig',
      mountConfig: 'mountConfig',
      ossVolumeConfig: 'ossVolumeConfig',
      teamID: 'teamID',
      volumeName: 'volumeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agenticFSVolumeConfig: AgenticFSVolumeConfig,
      mountConfig: CreateVolumeInputMountConfig,
      ossVolumeConfig: OSSVolumeConfig,
      teamID: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgenticBucketVolumeConfig } from "./AgenticBucketVolumeConfig";
import { JuiceFSVolumeConfig } from "./JuiceFsvolumeConfig";
import { OSSVolumeConfig } from "./OssvolumeConfig";


export class UpdateVolumeInputAgenticFSVolumeConfig extends $dara.Model {
  groupID?: number;
  serverAddr?: string;
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

export class UpdateVolumeInputMountConfigVpcConfig extends $dara.Model {
  securityGroupId?: string;
  vSwitchIds?: string[];
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

export class UpdateVolumeInputMountConfig extends $dara.Model {
  role?: string;
  vpcConfig?: UpdateVolumeInputMountConfigVpcConfig;
  static names(): { [key: string]: string } {
    return {
      role: 'role',
      vpcConfig: 'vpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      vpcConfig: UpdateVolumeInputMountConfigVpcConfig,
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

export class UpdateVolumeInput extends $dara.Model {
  agenticBucketVolumeConfig?: AgenticBucketVolumeConfig;
  agenticFSVolumeConfig?: UpdateVolumeInputAgenticFSVolumeConfig;
  juiceFSVolumeConfig?: JuiceFSVolumeConfig;
  mountConfig?: UpdateVolumeInputMountConfig;
  ossVolumeConfig?: OSSVolumeConfig;
  static names(): { [key: string]: string } {
    return {
      agenticBucketVolumeConfig: 'agenticBucketVolumeConfig',
      agenticFSVolumeConfig: 'agenticFSVolumeConfig',
      juiceFSVolumeConfig: 'juiceFSVolumeConfig',
      mountConfig: 'mountConfig',
      ossVolumeConfig: 'ossVolumeConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agenticBucketVolumeConfig: AgenticBucketVolumeConfig,
      agenticFSVolumeConfig: UpdateVolumeInputAgenticFSVolumeConfig,
      juiceFSVolumeConfig: JuiceFSVolumeConfig,
      mountConfig: UpdateVolumeInputMountConfig,
      ossVolumeConfig: OSSVolumeConfig,
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


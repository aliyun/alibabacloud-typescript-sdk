// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class OpenClawInstanceVOImageInfo extends $dara.Model {
  imageId?: number;
  name?: string;
  namespace?: string;
  tag?: string;
  versionDesc?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      name: 'Name',
      namespace: 'Namespace',
      tag: 'Tag',
      versionDesc: 'VersionDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'number',
      name: 'string',
      namespace: 'string',
      tag: 'string',
      versionDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenClawInstanceVO extends $dara.Model {
  aliyunAccountUid?: string;
  authType?: string;
  basicAuthPassword?: string;
  basicAuthUsername?: string;
  chargeType?: string;
  cpu?: number;
  gmtCreate?: string;
  gmtModified?: string;
  imageInfo?: OpenClawInstanceVOImageInfo;
  instanceDesc?: string;
  instanceId?: string;
  instanceName?: string;
  instanceRegion?: string;
  lastActiveTime?: string;
  lockTime?: string;
  memorySize?: number;
  openclawToken?: string;
  ownerUid?: string;
  publicDomain?: string;
  status?: number;
  statusDesc?: string;
  statusMessage?: string;
  trialExpireTime?: string;
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunAccountUid: 'AliyunAccountUid',
      authType: 'AuthType',
      basicAuthPassword: 'BasicAuthPassword',
      basicAuthUsername: 'BasicAuthUsername',
      chargeType: 'ChargeType',
      cpu: 'Cpu',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      imageInfo: 'ImageInfo',
      instanceDesc: 'InstanceDesc',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceRegion: 'InstanceRegion',
      lastActiveTime: 'LastActiveTime',
      lockTime: 'LockTime',
      memorySize: 'MemorySize',
      openclawToken: 'OpenclawToken',
      ownerUid: 'OwnerUid',
      publicDomain: 'PublicDomain',
      status: 'Status',
      statusDesc: 'StatusDesc',
      statusMessage: 'StatusMessage',
      trialExpireTime: 'TrialExpireTime',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunAccountUid: 'string',
      authType: 'string',
      basicAuthPassword: 'string',
      basicAuthUsername: 'string',
      chargeType: 'string',
      cpu: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      imageInfo: OpenClawInstanceVOImageInfo,
      instanceDesc: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceRegion: 'string',
      lastActiveTime: 'string',
      lockTime: 'string',
      memorySize: 'number',
      openclawToken: 'string',
      ownerUid: 'string',
      publicDomain: 'string',
      status: 'number',
      statusDesc: 'string',
      statusMessage: 'string',
      trialExpireTime: 'string',
      variables: 'string',
    };
  }

  validate() {
    if(this.imageInfo && typeof (this.imageInfo as any).validate === 'function') {
      (this.imageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


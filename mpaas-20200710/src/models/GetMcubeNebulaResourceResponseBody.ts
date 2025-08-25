// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMcubeNebulaResourceResponseBodyGetNebulaResourceResultNebulaResourceInfo extends $dara.Model {
  appCode?: string;
  autoInstall?: number;
  clientVersionMax?: string;
  clientVersionMin?: string;
  creator?: string;
  downloadUrl?: string;
  extendInfo?: string;
  extraData?: string;
  fallbackBaseUrl?: string;
  fileSize?: string;
  gmtCreate?: string;
  gmtModified?: string;
  h5Id?: string;
  h5Name?: string;
  h5Version?: string;
  id?: number;
  installType?: number;
  mainUrl?: string;
  memo?: string;
  metaId?: number;
  modifier?: string;
  packageType?: number;
  platform?: string;
  publishPeriod?: number;
  resourceType?: string;
  status?: number;
  vhost?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      autoInstall: 'AutoInstall',
      clientVersionMax: 'ClientVersionMax',
      clientVersionMin: 'ClientVersionMin',
      creator: 'Creator',
      downloadUrl: 'DownloadUrl',
      extendInfo: 'ExtendInfo',
      extraData: 'ExtraData',
      fallbackBaseUrl: 'FallbackBaseUrl',
      fileSize: 'FileSize',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      h5Version: 'H5Version',
      id: 'Id',
      installType: 'InstallType',
      mainUrl: 'MainUrl',
      memo: 'Memo',
      metaId: 'MetaId',
      modifier: 'Modifier',
      packageType: 'PackageType',
      platform: 'Platform',
      publishPeriod: 'PublishPeriod',
      resourceType: 'ResourceType',
      status: 'Status',
      vhost: 'Vhost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      autoInstall: 'number',
      clientVersionMax: 'string',
      clientVersionMin: 'string',
      creator: 'string',
      downloadUrl: 'string',
      extendInfo: 'string',
      extraData: 'string',
      fallbackBaseUrl: 'string',
      fileSize: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      h5Id: 'string',
      h5Name: 'string',
      h5Version: 'string',
      id: 'number',
      installType: 'number',
      mainUrl: 'string',
      memo: 'string',
      metaId: 'number',
      modifier: 'string',
      packageType: 'number',
      platform: 'string',
      publishPeriod: 'number',
      resourceType: 'string',
      status: 'number',
      vhost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeNebulaResourceResponseBodyGetNebulaResourceResult extends $dara.Model {
  errorCode?: string;
  nebulaResourceInfo?: GetMcubeNebulaResourceResponseBodyGetNebulaResourceResultNebulaResourceInfo;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      nebulaResourceInfo: 'NebulaResourceInfo',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      nebulaResourceInfo: GetMcubeNebulaResourceResponseBodyGetNebulaResourceResultNebulaResourceInfo,
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.nebulaResourceInfo && typeof (this.nebulaResourceInfo as any).validate === 'function') {
      (this.nebulaResourceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeNebulaResourceResponseBody extends $dara.Model {
  getNebulaResourceResult?: GetMcubeNebulaResourceResponseBodyGetNebulaResourceResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      getNebulaResourceResult: 'GetNebulaResourceResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getNebulaResourceResult: GetMcubeNebulaResourceResponseBodyGetNebulaResourceResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.getNebulaResourceResult && typeof (this.getNebulaResourceResult as any).validate === 'function') {
      (this.getNebulaResourceResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


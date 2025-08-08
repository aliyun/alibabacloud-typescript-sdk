// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcubeNebulaResourceRequest extends $dara.Model {
  appId?: string;
  autoInstall?: number;
  clientVersionMax?: string;
  clientVersionMin?: string;
  customDomainName?: string;
  extendInfo?: string;
  fileUrl?: string;
  h5Id?: string;
  h5Name?: string;
  h5Version?: string;
  installType?: number;
  mainUrl?: string;
  onexFlag?: boolean;
  platform?: string;
  repeatNebula?: number;
  resourceType?: number;
  subUrl?: string;
  tenantId?: string;
  vhost?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      autoInstall: 'AutoInstall',
      clientVersionMax: 'ClientVersionMax',
      clientVersionMin: 'ClientVersionMin',
      customDomainName: 'CustomDomainName',
      extendInfo: 'ExtendInfo',
      fileUrl: 'FileUrl',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      h5Version: 'H5Version',
      installType: 'InstallType',
      mainUrl: 'MainUrl',
      onexFlag: 'OnexFlag',
      platform: 'Platform',
      repeatNebula: 'RepeatNebula',
      resourceType: 'ResourceType',
      subUrl: 'SubUrl',
      tenantId: 'TenantId',
      vhost: 'Vhost',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      autoInstall: 'number',
      clientVersionMax: 'string',
      clientVersionMin: 'string',
      customDomainName: 'string',
      extendInfo: 'string',
      fileUrl: 'string',
      h5Id: 'string',
      h5Name: 'string',
      h5Version: 'string',
      installType: 'number',
      mainUrl: 'string',
      onexFlag: 'boolean',
      platform: 'string',
      repeatNebula: 'number',
      resourceType: 'number',
      subUrl: 'string',
      tenantId: 'string',
      vhost: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


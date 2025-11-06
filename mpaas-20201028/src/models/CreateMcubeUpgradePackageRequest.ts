// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcubeUpgradePackageRequest extends $dara.Model {
  appId?: string;
  appVersion?: string;
  appstoreUrl?: string;
  bundleId?: string;
  customDomainName?: string;
  desc?: string;
  downloadUrl?: string;
  fileUrl?: string;
  harmonyLabel?: string;
  iconFileUrl?: string;
  installAmount?: number;
  iosSymbolfileUrl?: string;
  isEnterprise?: number;
  largeIconUrl?: string;
  needCheck?: number;
  onexFlag?: boolean;
  platform?: string;
  tenantId?: string;
  validDays?: number;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      appstoreUrl: 'AppstoreUrl',
      bundleId: 'BundleId',
      customDomainName: 'CustomDomainName',
      desc: 'Desc',
      downloadUrl: 'DownloadUrl',
      fileUrl: 'FileUrl',
      harmonyLabel: 'HarmonyLabel',
      iconFileUrl: 'IconFileUrl',
      installAmount: 'InstallAmount',
      iosSymbolfileUrl: 'IosSymbolfileUrl',
      isEnterprise: 'IsEnterprise',
      largeIconUrl: 'LargeIconUrl',
      needCheck: 'NeedCheck',
      onexFlag: 'OnexFlag',
      platform: 'Platform',
      tenantId: 'TenantId',
      validDays: 'ValidDays',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      appstoreUrl: 'string',
      bundleId: 'string',
      customDomainName: 'string',
      desc: 'string',
      downloadUrl: 'string',
      fileUrl: 'string',
      harmonyLabel: 'string',
      iconFileUrl: 'string',
      installAmount: 'number',
      iosSymbolfileUrl: 'string',
      isEnterprise: 'number',
      largeIconUrl: 'string',
      needCheck: 'number',
      onexFlag: 'boolean',
      platform: 'string',
      tenantId: 'string',
      validDays: 'number',
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


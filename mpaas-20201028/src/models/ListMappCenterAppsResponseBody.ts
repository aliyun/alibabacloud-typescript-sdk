// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMappCenterAppsResponseBodyListMappCenterAppResultMappCenterAppListAndroidConfig extends $dara.Model {
  certRSA?: string;
  packageName?: string;
  static names(): { [key: string]: string } {
    return {
      certRSA: 'CertRSA',
      packageName: 'PackageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certRSA: 'string',
      packageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterAppsResponseBodyListMappCenterAppResultMappCenterAppListIosConfig extends $dara.Model {
  bundleId?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterAppsResponseBodyListMappCenterAppResultMappCenterAppList extends $dara.Model {
  androidConfig?: ListMappCenterAppsResponseBodyListMappCenterAppResultMappCenterAppListAndroidConfig;
  appDesc?: string;
  appIcon?: string;
  appId?: string;
  appName?: string;
  appSecret?: string;
  creator?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  iosConfig?: ListMappCenterAppsResponseBodyListMappCenterAppResultMappCenterAppListIosConfig;
  modifier?: string;
  monitorJson?: string;
  status?: number;
  tenantId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      androidConfig: 'AndroidConfig',
      appDesc: 'AppDesc',
      appIcon: 'AppIcon',
      appId: 'AppId',
      appName: 'AppName',
      appSecret: 'AppSecret',
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      iosConfig: 'IosConfig',
      modifier: 'Modifier',
      monitorJson: 'MonitorJson',
      status: 'Status',
      tenantId: 'TenantId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidConfig: ListMappCenterAppsResponseBodyListMappCenterAppResultMappCenterAppListAndroidConfig,
      appDesc: 'string',
      appIcon: 'string',
      appId: 'string',
      appName: 'string',
      appSecret: 'string',
      creator: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      iosConfig: ListMappCenterAppsResponseBodyListMappCenterAppResultMappCenterAppListIosConfig,
      modifier: 'string',
      monitorJson: 'string',
      status: 'number',
      tenantId: 'string',
      type: 'number',
    };
  }

  validate() {
    if(this.androidConfig && typeof (this.androidConfig as any).validate === 'function') {
      (this.androidConfig as any).validate();
    }
    if(this.iosConfig && typeof (this.iosConfig as any).validate === 'function') {
      (this.iosConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterAppsResponseBodyListMappCenterAppResult extends $dara.Model {
  mappCenterAppList?: ListMappCenterAppsResponseBodyListMappCenterAppResultMappCenterAppList[];
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      mappCenterAppList: 'MappCenterAppList',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mappCenterAppList: { 'type': 'array', 'itemType': ListMappCenterAppsResponseBodyListMappCenterAppResultMappCenterAppList },
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.mappCenterAppList)) {
      $dara.Model.validateArray(this.mappCenterAppList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterAppsResponseBody extends $dara.Model {
  listMappCenterAppResult?: ListMappCenterAppsResponseBodyListMappCenterAppResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      listMappCenterAppResult: 'ListMappCenterAppResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listMappCenterAppResult: ListMappCenterAppsResponseBodyListMappCenterAppResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.listMappCenterAppResult && typeof (this.listMappCenterAppResult as any).validate === 'function') {
      (this.listMappCenterAppResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


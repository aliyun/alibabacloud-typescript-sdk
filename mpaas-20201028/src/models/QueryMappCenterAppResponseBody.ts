// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMappCenterAppResponseBodyQueryMappCenterAppResultMappCenterAppAndroidConfig extends $dara.Model {
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

export class QueryMappCenterAppResponseBodyQueryMappCenterAppResultMappCenterAppIosConfig extends $dara.Model {
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

export class QueryMappCenterAppResponseBodyQueryMappCenterAppResultMappCenterApp extends $dara.Model {
  androidConfig?: QueryMappCenterAppResponseBodyQueryMappCenterAppResultMappCenterAppAndroidConfig;
  appDesc?: string;
  appIcon?: string;
  appId?: string;
  appName?: string;
  appSecret?: string;
  creator?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  iosConfig?: QueryMappCenterAppResponseBodyQueryMappCenterAppResultMappCenterAppIosConfig;
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
      androidConfig: QueryMappCenterAppResponseBodyQueryMappCenterAppResultMappCenterAppAndroidConfig,
      appDesc: 'string',
      appIcon: 'string',
      appId: 'string',
      appName: 'string',
      appSecret: 'string',
      creator: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      iosConfig: QueryMappCenterAppResponseBodyQueryMappCenterAppResultMappCenterAppIosConfig,
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

export class QueryMappCenterAppResponseBodyQueryMappCenterAppResult extends $dara.Model {
  mappCenterApp?: QueryMappCenterAppResponseBodyQueryMappCenterAppResultMappCenterApp;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      mappCenterApp: 'MappCenterApp',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mappCenterApp: QueryMappCenterAppResponseBodyQueryMappCenterAppResultMappCenterApp,
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.mappCenterApp && typeof (this.mappCenterApp as any).validate === 'function') {
      (this.mappCenterApp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMappCenterAppResponseBody extends $dara.Model {
  queryMappCenterAppResult?: QueryMappCenterAppResponseBodyQueryMappCenterAppResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      queryMappCenterAppResult: 'QueryMappCenterAppResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryMappCenterAppResult: QueryMappCenterAppResponseBodyQueryMappCenterAppResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.queryMappCenterAppResult && typeof (this.queryMappCenterAppResult as any).validate === 'function') {
      (this.queryMappCenterAppResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


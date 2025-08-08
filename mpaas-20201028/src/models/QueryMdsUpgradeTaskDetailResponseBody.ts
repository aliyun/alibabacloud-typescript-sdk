// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMdsUpgradeTaskDetailResponseBodyResultContentDataContentRuleJsonList extends $dara.Model {
  operation?: string;
  ruleElement?: string;
  ruleType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
      ruleElement: 'RuleElement',
      ruleType: 'RuleType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: 'string',
      ruleElement: 'string',
      ruleType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMdsUpgradeTaskDetailResponseBodyResultContentDataContentWhitelist extends $dara.Model {
  appCode?: string;
  business?: string;
  gmtModified?: string;
  id?: number;
  idType?: string;
  platform?: string;
  status?: number;
  whiteListCount?: number;
  whiteListName?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      business: 'Business',
      gmtModified: 'GmtModified',
      id: 'Id',
      idType: 'IdType',
      platform: 'Platform',
      status: 'Status',
      whiteListCount: 'WhiteListCount',
      whiteListName: 'WhiteListName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      business: 'string',
      gmtModified: 'string',
      id: 'number',
      idType: 'string',
      platform: 'string',
      status: 'number',
      whiteListCount: 'number',
      whiteListName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMdsUpgradeTaskDetailResponseBodyResultContentDataContent extends $dara.Model {
  appCode?: string;
  appId?: string;
  appstoreurl?: string;
  channelContains?: string;
  channelExcludes?: string;
  cityContains?: string;
  cityExcludes?: string;
  creator?: string;
  deviceGreyNum?: number;
  devicePercent?: number;
  downloadUrl?: string;
  executionOrder?: number;
  gmtCreateStr?: string;
  greyConfigInfo?: string;
  greyEndtimeData?: string;
  greyNotice?: number;
  greyNum?: number;
  greyUv?: number;
  id?: number;
  innerVersion?: string;
  isEnterprise?: number;
  isOfficial?: number;
  isPush?: number;
  isRc?: number;
  isRelease?: number;
  memo?: string;
  mobileModelContains?: string;
  mobileModelExcludes?: string;
  modifier?: string;
  netType?: string;
  osVersion?: string;
  packageInfoId?: number;
  packageType?: string;
  platform?: string;
  productId?: string;
  productVersion?: string;
  publishMode?: number;
  publishType?: number;
  pushContent?: string;
  qrcodeUrl?: string;
  releaseType?: string;
  ruleJsonList?: QueryMdsUpgradeTaskDetailResponseBodyResultContentDataContentRuleJsonList[];
  silentType?: number;
  syncMode?: string;
  syncResult?: string;
  taskStatus?: number;
  upgradeContent?: string;
  upgradeType?: number;
  upgradeValidTime?: number;
  whitelist?: QueryMdsUpgradeTaskDetailResponseBodyResultContentDataContentWhitelist[];
  whitelistIds?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appId: 'AppId',
      appstoreurl: 'Appstoreurl',
      channelContains: 'ChannelContains',
      channelExcludes: 'ChannelExcludes',
      cityContains: 'CityContains',
      cityExcludes: 'CityExcludes',
      creator: 'Creator',
      deviceGreyNum: 'DeviceGreyNum',
      devicePercent: 'DevicePercent',
      downloadUrl: 'DownloadUrl',
      executionOrder: 'ExecutionOrder',
      gmtCreateStr: 'GmtCreateStr',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtimeData: 'GreyEndtimeData',
      greyNotice: 'GreyNotice',
      greyNum: 'GreyNum',
      greyUv: 'GreyUv',
      id: 'Id',
      innerVersion: 'InnerVersion',
      isEnterprise: 'IsEnterprise',
      isOfficial: 'IsOfficial',
      isPush: 'IsPush',
      isRc: 'IsRc',
      isRelease: 'IsRelease',
      memo: 'Memo',
      mobileModelContains: 'MobileModelContains',
      mobileModelExcludes: 'MobileModelExcludes',
      modifier: 'Modifier',
      netType: 'NetType',
      osVersion: 'OsVersion',
      packageInfoId: 'PackageInfoId',
      packageType: 'PackageType',
      platform: 'Platform',
      productId: 'ProductId',
      productVersion: 'ProductVersion',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      pushContent: 'PushContent',
      qrcodeUrl: 'QrcodeUrl',
      releaseType: 'ReleaseType',
      ruleJsonList: 'RuleJsonList',
      silentType: 'SilentType',
      syncMode: 'SyncMode',
      syncResult: 'SyncResult',
      taskStatus: 'TaskStatus',
      upgradeContent: 'UpgradeContent',
      upgradeType: 'UpgradeType',
      upgradeValidTime: 'UpgradeValidTime',
      whitelist: 'Whitelist',
      whitelistIds: 'WhitelistIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appId: 'string',
      appstoreurl: 'string',
      channelContains: 'string',
      channelExcludes: 'string',
      cityContains: 'string',
      cityExcludes: 'string',
      creator: 'string',
      deviceGreyNum: 'number',
      devicePercent: 'number',
      downloadUrl: 'string',
      executionOrder: 'number',
      gmtCreateStr: 'string',
      greyConfigInfo: 'string',
      greyEndtimeData: 'string',
      greyNotice: 'number',
      greyNum: 'number',
      greyUv: 'number',
      id: 'number',
      innerVersion: 'string',
      isEnterprise: 'number',
      isOfficial: 'number',
      isPush: 'number',
      isRc: 'number',
      isRelease: 'number',
      memo: 'string',
      mobileModelContains: 'string',
      mobileModelExcludes: 'string',
      modifier: 'string',
      netType: 'string',
      osVersion: 'string',
      packageInfoId: 'number',
      packageType: 'string',
      platform: 'string',
      productId: 'string',
      productVersion: 'string',
      publishMode: 'number',
      publishType: 'number',
      pushContent: 'string',
      qrcodeUrl: 'string',
      releaseType: 'string',
      ruleJsonList: { 'type': 'array', 'itemType': QueryMdsUpgradeTaskDetailResponseBodyResultContentDataContentRuleJsonList },
      silentType: 'number',
      syncMode: 'string',
      syncResult: 'string',
      taskStatus: 'number',
      upgradeContent: 'string',
      upgradeType: 'number',
      upgradeValidTime: 'number',
      whitelist: { 'type': 'array', 'itemType': QueryMdsUpgradeTaskDetailResponseBodyResultContentDataContentWhitelist },
      whitelistIds: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ruleJsonList)) {
      $dara.Model.validateArray(this.ruleJsonList);
    }
    if(Array.isArray(this.whitelist)) {
      $dara.Model.validateArray(this.whitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMdsUpgradeTaskDetailResponseBodyResultContentData extends $dara.Model {
  content?: QueryMdsUpgradeTaskDetailResponseBodyResultContentDataContent;
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: QueryMdsUpgradeTaskDetailResponseBodyResultContentDataContent,
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMdsUpgradeTaskDetailResponseBodyResultContent extends $dara.Model {
  data?: QueryMdsUpgradeTaskDetailResponseBodyResultContentData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryMdsUpgradeTaskDetailResponseBodyResultContentData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMdsUpgradeTaskDetailResponseBody extends $dara.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: QueryMdsUpgradeTaskDetailResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: QueryMdsUpgradeTaskDetailResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.resultContent && typeof (this.resultContent as any).validate === 'function') {
      (this.resultContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


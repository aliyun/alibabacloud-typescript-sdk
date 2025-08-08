// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserAppUploadProcessInMsaResponseBodyResultContentDataApkInfoEnhanceMapping extends $dara.Model {
  info?: string;
  reason?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      reason: 'Reason',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: 'string',
      reason: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAppUploadProcessInMsaResponseBodyResultContentDataApkInfo extends $dara.Model {
  afterMd5?: string;
  afterSize?: number;
  appCode?: string;
  appPackage?: string;
  assetsFileList?: string[];
  beforeMd5?: string;
  beforeSize?: number;
  classForest?: string;
  enhanceMapping?: GetUserAppUploadProcessInMsaResponseBodyResultContentDataApkInfoEnhanceMapping[];
  enhanceRules?: string[];
  enhancedAssetsFiles?: string[];
  enhancedClasses?: string[];
  enhancedSoFiles?: string[];
  id?: number;
  label?: string;
  progress?: number;
  soFileList?: string[];
  status?: number;
  taskType?: string;
  versionCode?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      afterMd5: 'AfterMd5',
      afterSize: 'AfterSize',
      appCode: 'AppCode',
      appPackage: 'AppPackage',
      assetsFileList: 'AssetsFileList',
      beforeMd5: 'BeforeMd5',
      beforeSize: 'BeforeSize',
      classForest: 'ClassForest',
      enhanceMapping: 'EnhanceMapping',
      enhanceRules: 'EnhanceRules',
      enhancedAssetsFiles: 'EnhancedAssetsFiles',
      enhancedClasses: 'EnhancedClasses',
      enhancedSoFiles: 'EnhancedSoFiles',
      id: 'Id',
      label: 'Label',
      progress: 'Progress',
      soFileList: 'SoFileList',
      status: 'Status',
      taskType: 'TaskType',
      versionCode: 'VersionCode',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterMd5: 'string',
      afterSize: 'number',
      appCode: 'string',
      appPackage: 'string',
      assetsFileList: { 'type': 'array', 'itemType': 'string' },
      beforeMd5: 'string',
      beforeSize: 'number',
      classForest: 'string',
      enhanceMapping: { 'type': 'array', 'itemType': GetUserAppUploadProcessInMsaResponseBodyResultContentDataApkInfoEnhanceMapping },
      enhanceRules: { 'type': 'array', 'itemType': 'string' },
      enhancedAssetsFiles: { 'type': 'array', 'itemType': 'string' },
      enhancedClasses: { 'type': 'array', 'itemType': 'string' },
      enhancedSoFiles: { 'type': 'array', 'itemType': 'string' },
      id: 'number',
      label: 'string',
      progress: 'number',
      soFileList: { 'type': 'array', 'itemType': 'string' },
      status: 'number',
      taskType: 'string',
      versionCode: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assetsFileList)) {
      $dara.Model.validateArray(this.assetsFileList);
    }
    if(Array.isArray(this.enhanceMapping)) {
      $dara.Model.validateArray(this.enhanceMapping);
    }
    if(Array.isArray(this.enhanceRules)) {
      $dara.Model.validateArray(this.enhanceRules);
    }
    if(Array.isArray(this.enhancedAssetsFiles)) {
      $dara.Model.validateArray(this.enhancedAssetsFiles);
    }
    if(Array.isArray(this.enhancedClasses)) {
      $dara.Model.validateArray(this.enhancedClasses);
    }
    if(Array.isArray(this.enhancedSoFiles)) {
      $dara.Model.validateArray(this.enhancedSoFiles);
    }
    if(Array.isArray(this.soFileList)) {
      $dara.Model.validateArray(this.soFileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAppUploadProcessInMsaResponseBodyResultContentData extends $dara.Model {
  apkInfo?: GetUserAppUploadProcessInMsaResponseBodyResultContentDataApkInfo;
  enhanceTaskId?: number;
  id?: number;
  progress?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      apkInfo: 'ApkInfo',
      enhanceTaskId: 'EnhanceTaskId',
      id: 'Id',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apkInfo: GetUserAppUploadProcessInMsaResponseBodyResultContentDataApkInfo,
      enhanceTaskId: 'number',
      id: 'number',
      progress: 'number',
      status: 'number',
    };
  }

  validate() {
    if(this.apkInfo && typeof (this.apkInfo as any).validate === 'function') {
      (this.apkInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAppUploadProcessInMsaResponseBodyResultContent extends $dara.Model {
  code?: string;
  data?: GetUserAppUploadProcessInMsaResponseBodyResultContentData;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetUserAppUploadProcessInMsaResponseBodyResultContentData,
      message: 'string',
      success: 'boolean',
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

export class GetUserAppUploadProcessInMsaResponseBody extends $dara.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: GetUserAppUploadProcessInMsaResponseBodyResultContent;
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
      resultContent: GetUserAppUploadProcessInMsaResponseBodyResultContent,
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


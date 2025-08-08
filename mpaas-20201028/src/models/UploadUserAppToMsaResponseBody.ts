// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadUserAppToMsaResponseBodyResultContentDataApkInfoEnhanceMapping extends $dara.Model {
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

export class UploadUserAppToMsaResponseBodyResultContentDataApkInfo extends $dara.Model {
  afterMd5?: string;
  afterSize?: number;
  appCode?: string;
  appPackage?: string;
  beforeMd5?: string;
  beforeSize?: number;
  classForest?: string;
  enhanceMapping?: UploadUserAppToMsaResponseBodyResultContentDataApkInfoEnhanceMapping;
  enhanceRules?: string[];
  enhancedClasses?: string[];
  id?: number;
  label?: string;
  progress?: number;
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
      beforeMd5: 'BeforeMd5',
      beforeSize: 'BeforeSize',
      classForest: 'ClassForest',
      enhanceMapping: 'EnhanceMapping',
      enhanceRules: 'EnhanceRules',
      enhancedClasses: 'EnhancedClasses',
      id: 'Id',
      label: 'Label',
      progress: 'Progress',
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
      beforeMd5: 'string',
      beforeSize: 'number',
      classForest: 'string',
      enhanceMapping: UploadUserAppToMsaResponseBodyResultContentDataApkInfoEnhanceMapping,
      enhanceRules: { 'type': 'array', 'itemType': 'string' },
      enhancedClasses: { 'type': 'array', 'itemType': 'string' },
      id: 'number',
      label: 'string',
      progress: 'number',
      status: 'number',
      taskType: 'string',
      versionCode: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(this.enhanceMapping && typeof (this.enhanceMapping as any).validate === 'function') {
      (this.enhanceMapping as any).validate();
    }
    if(Array.isArray(this.enhanceRules)) {
      $dara.Model.validateArray(this.enhanceRules);
    }
    if(Array.isArray(this.enhancedClasses)) {
      $dara.Model.validateArray(this.enhancedClasses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadUserAppToMsaResponseBodyResultContentData extends $dara.Model {
  apkInfo?: UploadUserAppToMsaResponseBodyResultContentDataApkInfo;
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
      apkInfo: UploadUserAppToMsaResponseBodyResultContentDataApkInfo,
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

export class UploadUserAppToMsaResponseBodyResultContent extends $dara.Model {
  code?: string;
  data?: UploadUserAppToMsaResponseBodyResultContentData;
  extra?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      extra: 'Extra',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UploadUserAppToMsaResponseBodyResultContentData,
      extra: 'string',
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

export class UploadUserAppToMsaResponseBody extends $dara.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: UploadUserAppToMsaResponseBodyResultContent;
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
      resultContent: UploadUserAppToMsaResponseBodyResultContent,
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


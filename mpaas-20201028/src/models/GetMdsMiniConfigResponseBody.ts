// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMdsMiniConfigResponseBodyResultContentDataContentApiConfigList extends $dara.Model {
  appCode?: string;
  configStatus?: number;
  configType?: string;
  configValue?: string;
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  h5Id?: string;
  h5Name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      configStatus: 'ConfigStatus',
      configType: 'ConfigType',
      configValue: 'ConfigValue',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      configStatus: 'number',
      configType: 'string',
      configValue: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      h5Id: 'string',
      h5Name: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMdsMiniConfigResponseBodyResultContentDataContentPrivilegeSwitch extends $dara.Model {
  appCode?: string;
  configStatus?: number;
  configType?: string;
  configValue?: string;
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  h5Id?: string;
  h5Name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      configStatus: 'ConfigStatus',
      configType: 'ConfigType',
      configValue: 'ConfigValue',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      configStatus: 'number',
      configType: 'string',
      configValue: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      h5Id: 'string',
      h5Name: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMdsMiniConfigResponseBodyResultContentDataContentServerDomainConfigList extends $dara.Model {
  appCode?: string;
  configStatus?: number;
  configType?: string;
  configValue?: string;
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  h5Id?: string;
  h5Name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      configStatus: 'ConfigStatus',
      configType: 'ConfigType',
      configValue: 'ConfigValue',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      configStatus: 'number',
      configType: 'string',
      configValue: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      h5Id: 'string',
      h5Name: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMdsMiniConfigResponseBodyResultContentDataContentWebviewDomainConfigList extends $dara.Model {
  appCode?: string;
  configStatus?: number;
  configType?: string;
  configValue?: string;
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  h5Id?: string;
  h5Name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      configStatus: 'ConfigStatus',
      configType: 'ConfigType',
      configValue: 'ConfigValue',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      configStatus: 'number',
      configType: 'string',
      configValue: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      h5Id: 'string',
      h5Name: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMdsMiniConfigResponseBodyResultContentDataContent extends $dara.Model {
  apiConfigList?: GetMdsMiniConfigResponseBodyResultContentDataContentApiConfigList[];
  appCode?: string;
  enableServerDomainCount?: string;
  h5Id?: string;
  h5Name?: string;
  privilegeSwitch?: GetMdsMiniConfigResponseBodyResultContentDataContentPrivilegeSwitch;
  serverDomainConfigList?: GetMdsMiniConfigResponseBodyResultContentDataContentServerDomainConfigList[];
  webviewDomainConfigList?: GetMdsMiniConfigResponseBodyResultContentDataContentWebviewDomainConfigList[];
  static names(): { [key: string]: string } {
    return {
      apiConfigList: 'ApiConfigList',
      appCode: 'AppCode',
      enableServerDomainCount: 'EnableServerDomainCount',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      privilegeSwitch: 'PrivilegeSwitch',
      serverDomainConfigList: 'ServerDomainConfigList',
      webviewDomainConfigList: 'WebviewDomainConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiConfigList: { 'type': 'array', 'itemType': GetMdsMiniConfigResponseBodyResultContentDataContentApiConfigList },
      appCode: 'string',
      enableServerDomainCount: 'string',
      h5Id: 'string',
      h5Name: 'string',
      privilegeSwitch: GetMdsMiniConfigResponseBodyResultContentDataContentPrivilegeSwitch,
      serverDomainConfigList: { 'type': 'array', 'itemType': GetMdsMiniConfigResponseBodyResultContentDataContentServerDomainConfigList },
      webviewDomainConfigList: { 'type': 'array', 'itemType': GetMdsMiniConfigResponseBodyResultContentDataContentWebviewDomainConfigList },
    };
  }

  validate() {
    if(Array.isArray(this.apiConfigList)) {
      $dara.Model.validateArray(this.apiConfigList);
    }
    if(this.privilegeSwitch && typeof (this.privilegeSwitch as any).validate === 'function') {
      (this.privilegeSwitch as any).validate();
    }
    if(Array.isArray(this.serverDomainConfigList)) {
      $dara.Model.validateArray(this.serverDomainConfigList);
    }
    if(Array.isArray(this.webviewDomainConfigList)) {
      $dara.Model.validateArray(this.webviewDomainConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMdsMiniConfigResponseBodyResultContentData extends $dara.Model {
  content?: GetMdsMiniConfigResponseBodyResultContentDataContent;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: GetMdsMiniConfigResponseBodyResultContentDataContent,
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

export class GetMdsMiniConfigResponseBodyResultContent extends $dara.Model {
  data?: GetMdsMiniConfigResponseBodyResultContentData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMdsMiniConfigResponseBodyResultContentData,
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

export class GetMdsMiniConfigResponseBody extends $dara.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: GetMdsMiniConfigResponseBodyResultContent;
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
      resultContent: GetMdsMiniConfigResponseBodyResultContent,
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


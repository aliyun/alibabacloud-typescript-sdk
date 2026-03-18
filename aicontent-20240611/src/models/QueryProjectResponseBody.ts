// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryProjectResponseBodyDataProjectAppsApplicationAccessIds extends $dara.Model {
  /**
   * @example
   * 1234567890
   */
  applicationAccessId?: string;
  /**
   * @example
   * MyAppSecret
   */
  applicationAccessSecret?: string;
  static names(): { [key: string]: string } {
    return {
      applicationAccessId: 'applicationAccessId',
      applicationAccessSecret: 'applicationAccessSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessId: 'string',
      applicationAccessSecret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectResponseBodyDataProjectApps extends $dara.Model {
  applicationAccessIds?: QueryProjectResponseBodyDataProjectAppsApplicationAccessIds[];
  /**
   * @example
   * 2144
   */
  id?: string;
  /**
   * @example
   * 159
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationAccessIds: 'ApplicationAccessIds',
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessIds: { 'type': 'array', 'itemType': QueryProjectResponseBodyDataProjectAppsApplicationAccessIds },
      id: 'string',
      projectId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationAccessIds)) {
      $dara.Model.validateArray(this.applicationAccessIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectResponseBodyDataProjectSDK extends $dara.Model {
  /**
   * @example
   * 2024-11-01T13:40:53Z
   */
  createTime?: string;
  /**
   * @example
   * http://demo.com/demo
   */
  demoUrl?: string;
  deployMode?: string;
  /**
   * @example
   * JAVA
   */
  developLanguage?: string;
  /**
   * @example
   * http://demo.com/doc
   */
  docUrl?: string;
  /**
   * @example
   * JSSDK
   */
  sdkName?: string;
  /**
   * @example
   * http://demo.com/sdk.zip
   */
  sdkUrl?: string;
  /**
   * @example
   * 5.1.0
   */
  sdkVersion?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      demoUrl: 'DemoUrl',
      deployMode: 'DeployMode',
      developLanguage: 'DevelopLanguage',
      docUrl: 'DocUrl',
      sdkName: 'SdkName',
      sdkUrl: 'SdkUrl',
      sdkVersion: 'SdkVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      demoUrl: 'string',
      deployMode: 'string',
      developLanguage: 'string',
      docUrl: 'string',
      sdkName: 'string',
      sdkUrl: 'string',
      sdkVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-11-01T13:40:53Z
   */
  createTime?: string;
  projectApps?: QueryProjectResponseBodyDataProjectApps[];
  /**
   * @example
   * 67055
   */
  projectId?: string;
  /**
   * @example
   * MyProject
   */
  projectName?: string;
  projectSDK?: QueryProjectResponseBodyDataProjectSDK[];
  /**
   * @example
   * WebApplication
   */
  projectType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      projectApps: 'ProjectApps',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectSDK: 'ProjectSDK',
      projectType: 'ProjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      projectApps: { 'type': 'array', 'itemType': QueryProjectResponseBodyDataProjectApps },
      projectId: 'string',
      projectName: 'string',
      projectSDK: { 'type': 'array', 'itemType': QueryProjectResponseBodyDataProjectSDK },
      projectType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.projectApps)) {
      $dara.Model.validateArray(this.projectApps);
    }
    if(Array.isArray(this.projectSDK)) {
      $dara.Model.validateArray(this.projectSDK);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  data?: QueryProjectResponseBodyData;
  /**
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryProjectResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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


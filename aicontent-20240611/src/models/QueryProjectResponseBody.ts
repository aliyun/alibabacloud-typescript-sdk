// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryProjectResponseBodyDataProjectAppsApplicationAccessIds extends $dara.Model {
  /**
   * @remarks
   * The application ID, also known as the AppKey.
   * 
   * @example
   * 1234567890
   */
  applicationAccessId?: string;
  /**
   * @remarks
   * The application secret. This parameter is returned only for requests from the console.
   * 
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
  /**
   * @remarks
   * The application access credentials.
   */
  applicationAccessIds?: QueryProjectResponseBodyDataProjectAppsApplicationAccessIds[];
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 2144
   */
  id?: string;
  /**
   * @remarks
   * The project ID.
   * 
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
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-11-01T13:40:53Z
   */
  createTime?: string;
  /**
   * @remarks
   * The demo URL.
   * 
   * @example
   * http://demo.com/demo
   */
  demoUrl?: string;
  /**
   * @remarks
   * The deployment mode. Valid values: `client` or `server`.
   * 
   * @example
   * 服务端
   */
  deployMode?: string;
  /**
   * @remarks
   * The development language. For example: JAVA.
   * 
   * @example
   * JAVA
   */
  developLanguage?: string;
  /**
   * @remarks
   * The document URL.
   * 
   * @example
   * http://demo.com/doc
   */
  docUrl?: string;
  /**
   * @remarks
   * The SDK name.
   * 
   * @example
   * JSSDK
   */
  sdkName?: string;
  /**
   * @remarks
   * The SDK URL.
   * 
   * @example
   * http://demo.com/sdk.zip
   */
  sdkUrl?: string;
  /**
   * @remarks
   * The SDK version.
   * 
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
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-11-01T13:40:53Z
   */
  createTime?: string;
  /**
   * @remarks
   * The list of applications in the project.
   */
  projectApps?: QueryProjectResponseBodyDataProjectApps[];
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 67055
   */
  projectId?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * MyProject
   */
  projectName?: string;
  /**
   * @remarks
   * The list of SDKs associated with the project.
   */
  projectSDK?: QueryProjectResponseBodyDataProjectSDK[];
  /**
   * @remarks
   * The project type.
   * 
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
   * @remarks
   * The returned data, which contains the details of the project.
   * 
   * @example
   * []
   */
  data?: QueryProjectResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates if the request was successful.
   * 
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


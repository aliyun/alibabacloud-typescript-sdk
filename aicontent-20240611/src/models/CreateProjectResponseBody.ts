// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectResponseBodyDataProjectAppsApplicationAccessIds extends $dara.Model {
  /**
   * @remarks
   * The app key.
   * 
   * @example
   * 1234567890
   */
  applicationAccessId?: string;
  /**
   * @remarks
   * The app secret. This parameter is returned only for requests sent from the console.
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

export class CreateProjectResponseBodyDataProjectApps extends $dara.Model {
  /**
   * @remarks
   * The access credentials for the application.
   */
  applicationAccessIds?: CreateProjectResponseBodyDataProjectAppsApplicationAccessIds[];
  /**
   * @remarks
   * The internal ID of the application.
   * 
   * @example
   * 4867
   */
  id?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 4910
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
      applicationAccessIds: { 'type': 'array', 'itemType': CreateProjectResponseBodyDataProjectAppsApplicationAccessIds },
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

export class CreateProjectResponseBodyDataProjectSDK extends $dara.Model {
  /**
   * @remarks
   * The SDK\\"s creation time.
   * 
   * @example
   * 2023-02-15T09:17:39Z
   */
  createTime?: string;
  /**
   * @remarks
   * The demo\\"s URL.
   * 
   * @example
   * http://demo.com/demo
   */
  demoUrl?: string;
  /**
   * @remarks
   * The deployment mode. Valid values: client or server.
   * 
   * @example
   * 客户端
   */
  deployMode?: string;
  /**
   * @remarks
   * The development language.
   * 
   * @example
   * C++
   */
  developLanguage?: string;
  /**
   * @remarks
   * The SDK\\"s documentation URL.
   * 
   * @example
   * http://demo.com/doc
   */
  docUrl?: string;
  /**
   * @remarks
   * The name of the SDK.
   * 
   * @example
   * C SDK
   */
  sdkName?: string;
  /**
   * @remarks
   * The SDK\\"s download URL.
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
   * 4.12.8
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

export class CreateProjectResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The project\\"s creation time.
   * 
   * @example
   * 2023-02-15T09:17:39Z
   */
  createTime?: string;
  /**
   * @remarks
   * The applications in the project.
   */
  projectApps?: CreateProjectResponseBodyDataProjectApps[];
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 124187
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
   * The SDKs for the project.
   */
  projectSDK?: CreateProjectResponseBodyDataProjectSDK[];
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
      projectApps: { 'type': 'array', 'itemType': CreateProjectResponseBodyDataProjectApps },
      projectId: 'string',
      projectName: 'string',
      projectSDK: { 'type': 'array', 'itemType': CreateProjectResponseBodyDataProjectSDK },
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

export class CreateProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data object.
   * 
   * @example
   * []
   */
  data?: CreateProjectResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
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
   * Indicates whether the request was successful.
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
      data: CreateProjectResponseBodyData,
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


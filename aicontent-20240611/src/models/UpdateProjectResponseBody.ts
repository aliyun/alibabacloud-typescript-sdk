// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectResponseBodyDataProjectAppsApplicationAccessIds extends $dara.Model {
  /**
   * @remarks
   * The application identifier, also known as the AppKey.
   * 
   * @example
   * 1234567890
   */
  applicationAccessId?: string;
  /**
   * @remarks
   * The application secret. This is returned only for requests from the console.
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

export class UpdateProjectResponseBodyDataProjectApps extends $dara.Model {
  /**
   * @remarks
   * The application access credentials.
   */
  applicationAccessIds?: UpdateProjectResponseBodyDataProjectAppsApplicationAccessIds[];
  /**
   * @remarks
   * The internal ID of the application.
   * 
   * @example
   * 4498
   */
  id?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 1889
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
      applicationAccessIds: { 'type': 'array', 'itemType': UpdateProjectResponseBodyDataProjectAppsApplicationAccessIds },
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

export class UpdateProjectResponseBodyDataProjectSDK extends $dara.Model {
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
   * The deployment mode. Valid values: client-side or server-side.
   * 
   * @example
   * 服务端
   */
  deployMode?: string;
  /**
   * @remarks
   * The development language.
   * 
   * @example
   * PHP
   */
  developLanguage?: string;
  /**
   * @remarks
   * The documentation URL.
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
   * PHP服务端SDK
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
   * 4.13.0
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

export class UpdateProjectResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-12-10T02:07:16Z
   */
  createTime?: string;
  /**
   * @remarks
   * The list of project applications.
   */
  projectApps?: UpdateProjectResponseBodyDataProjectApps[];
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 56160
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
   * The project SDK.
   */
  projectSDK?: UpdateProjectResponseBodyDataProjectSDK[];
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
      projectApps: { 'type': 'array', 'itemType': UpdateProjectResponseBodyDataProjectApps },
      projectId: 'string',
      projectName: 'string',
      projectSDK: { 'type': 'array', 'itemType': UpdateProjectResponseBodyDataProjectSDK },
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

export class UpdateProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data object.
   * 
   * @example
   * []
   */
  data?: UpdateProjectResponseBodyData;
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
      data: UpdateProjectResponseBodyData,
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


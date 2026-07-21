// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryProjectListResponseBodyDataProjectAppsApplicationAccessIds extends $dara.Model {
  /**
   * @remarks
   * The application access ID, also known as the appkey.
   * 
   * @example
   * 1234567890
   */
  applicationAccessId?: string;
  /**
   * @remarks
   * The application access secret. This field is returned only for requests made from the console.
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

export class QueryProjectListResponseBodyDataProjectApps extends $dara.Model {
  /**
   * @remarks
   * A list of access credentials for the application.
   */
  applicationAccessIds?: QueryProjectListResponseBodyDataProjectAppsApplicationAccessIds[];
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 4700
   */
  id?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 4747
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
      applicationAccessIds: { 'type': 'array', 'itemType': QueryProjectListResponseBodyDataProjectAppsApplicationAccessIds },
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

export class QueryProjectListResponseBodyDataProjectSDK extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-07-16T08:23:19Z
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
   * The deployment mode. Valid values: client-side and server-side.
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
   * JAVA
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
   * GO AUTH
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
   * .3.52
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

export class QueryProjectListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-02-18 12:10:22
   */
  createTime?: string;
  /**
   * @remarks
   * A list of applications in the project.
   */
  projectApps?: QueryProjectListResponseBodyDataProjectApps[];
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 4910
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
   * A list of SDKs for the project.
   */
  projectSDK?: QueryProjectListResponseBodyDataProjectSDK[];
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
      projectApps: { 'type': 'array', 'itemType': QueryProjectListResponseBodyDataProjectApps },
      projectId: 'string',
      projectName: 'string',
      projectSDK: { 'type': 'array', 'itemType': QueryProjectListResponseBodyDataProjectSDK },
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

export class QueryProjectListResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of projects.
   * 
   * @example
   * []
   */
  data?: QueryProjectListResponseBodyData[];
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
   * Whether the request succeeded.
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
      data: { 'type': 'array', 'itemType': QueryProjectListResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


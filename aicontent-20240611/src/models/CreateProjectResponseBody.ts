// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectResponseBodyDataProjectAppsApplicationAccessIds extends $dara.Model {
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

export class CreateProjectResponseBodyDataProjectApps extends $dara.Model {
  applicationAccessIds?: CreateProjectResponseBodyDataProjectAppsApplicationAccessIds[];
  /**
   * @example
   * 4867
   */
  id?: string;
  /**
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
   * @example
   * 2023-02-15T09:17:39Z
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
   * C++
   */
  developLanguage?: string;
  /**
   * @example
   * http://demo.com/doc
   */
  docUrl?: string;
  /**
   * @example
   * C SDK
   */
  sdkName?: string;
  /**
   * @example
   * http://demo.com/sdk.zip
   */
  sdkUrl?: string;
  /**
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
   * @example
   * 2023-02-15T09:17:39Z
   */
  createTime?: string;
  projectApps?: CreateProjectResponseBodyDataProjectApps[];
  /**
   * @example
   * 124187
   */
  projectId?: string;
  /**
   * @example
   * MyProject
   */
  projectName?: string;
  projectSDK?: CreateProjectResponseBodyDataProjectSDK[];
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
   * @example
   * []
   */
  data?: CreateProjectResponseBodyData;
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


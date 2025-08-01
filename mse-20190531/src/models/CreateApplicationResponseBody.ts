// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * xxxxxxxx@xxxxxxxxxx
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * spring-cloud-a
   */
  appName?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1631001140913
   */
  createTime?: number;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * {\\"rpcTypes\\":[\\"dubbo\\",\\"springCloud\\"]}
   */
  extraInfo?: string;
  /**
   * @remarks
   * The programming language of the application.
   * 
   * @example
   * JAVA
   */
  language?: string;
  /**
   * @remarks
   * The license key in use.
   * 
   * @example
   * xxxxxxxx@xxxxxxxxxx
   */
  licenseKey?: string;
  /**
   * @remarks
   * MSE命名空间名字。
   * 
   * @example
   * prod
   */
  namespace?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service where the application is deployed. Valid values:
   * 
   * *   \\- ACK: Container Service for Kubernetes
   * *   \\- Normal: another service
   * 
   * @example
   * ACK
   */
  source?: string;
  /**
   * @remarks
   * The status of the application. A value of 1 indicates that the application is in a normal state.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1632979237663
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1888888888
   */
  userId?: string;
  /**
   * @remarks
   * 版本号。
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createTime: 'CreateTime',
      extraInfo: 'ExtraInfo',
      language: 'Language',
      licenseKey: 'LicenseKey',
      namespace: 'Namespace',
      regionId: 'RegionId',
      source: 'Source',
      status: 'Status',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      createTime: 'number',
      extraInfo: 'string',
      language: 'string',
      licenseKey: 'string',
      namespace: 'string',
      regionId: 'string',
      source: 'string',
      status: 'number',
      updateTime: 'number',
      userId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data of the node.
   * 
   * @example
   * data
   */
  data?: CreateApplicationResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 68D91223-CCE9-5F9C-B538-20F617DA48B1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateApplicationResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
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


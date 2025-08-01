// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMseServiceApplicationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
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
   * {}
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
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * edasmsc
   */
  source?: string;
  /**
   * @remarks
   * The status. Valid values: 1: available; 2: deleted.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 1632979237663
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 1234567890
   */
  userId?: string;
  /**
   * @remarks
   * The version information.
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

export class CreateMseServiceApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data structure.
   */
  data?: CreateMseServiceApplicationResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The request was successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 904F6C04-1284-****-8ED2-FFC57E507A72
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
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateMseServiceApplicationResponseBodyData,
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


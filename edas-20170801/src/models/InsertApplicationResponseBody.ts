// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertApplicationResponseBodyApplicationInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. The ID is the unique identifier of the application in EDAS.
   * 
   * @example
   * 6c733bcd-6efb-47a1-8226-cf722c******
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * hello-edas-test-1
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the change process.
   * 
   * @example
   * d0cf569e-dce3-4efb-****-08b70021****
   */
  changeOrderId?: string;
  /**
   * @remarks
   * Indicates whether the application is a Docker application. Valid values:
   * 
   * *   **true**: The application is a Docker application.
   * *   **false**: The application is not a Docker application.
   * 
   * @example
   * false
   */
  dockerize?: boolean;
  /**
   * @remarks
   * The owner of the application. The owner is the user who created the application.
   * 
   * @example
   * 249763358688********
   */
  owner?: string;
  /**
   * @remarks
   * The port used by the created application. Default value: 8080. You can call the UpdateContainerConfiguration operation to change the port. For more information, see [UpdateContainerConfiguration](https://help.aliyun.com/document_detail/149403.html).
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionName?: string;
  /**
   * @remarks
   * The ID of the user who created the application.
   * 
   * @example
   * tdy218@1362469756xxxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      changeOrderId: 'ChangeOrderId',
      dockerize: 'Dockerize',
      owner: 'Owner',
      port: 'Port',
      regionName: 'RegionName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      changeOrderId: 'string',
      dockerize: 'boolean',
      owner: 'string',
      port: 'number',
      regionName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the created application.
   */
  applicationInfo?: InsertApplicationResponseBodyApplicationInfo;
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * The application name test-hsy-C5039-paas-6 had been created successfully.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4264F69C-686C-4107-B493-0599C8xxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationInfo: 'ApplicationInfo',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationInfo: InsertApplicationResponseBodyApplicationInfo,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationInfo && typeof (this.applicationInfo as any).validate === 'function') {
      (this.applicationInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


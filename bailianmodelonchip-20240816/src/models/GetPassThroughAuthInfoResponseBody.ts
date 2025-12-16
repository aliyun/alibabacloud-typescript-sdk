// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPassThroughAuthInfoResponseBodyData extends $dara.Model {
  /**
   * @example
   * mm_2b7d37b695fb44faa983e5fbb032
   */
  appId?: string;
  /**
   * @example
   * 35f9ed99b27a1e8374f6593bf969f7d6
   */
  deviceName?: string;
  /**
   * @example
   * {"device_info":"246c19a2c721724aa3e52e96a93a730ce9080b3a7680522a0d5210e0dc0a43cd","timestamp":"1765874670867"}
   */
  passThroughParams?: { [key: string]: any };
  /**
   * @example
   * 8e4e0522a986cd641866c2b2453eedfa
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      deviceName: 'deviceName',
      passThroughParams: 'passThroughParams',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      deviceName: 'string',
      passThroughParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      taskId: 'string',
    };
  }

  validate() {
    if(this.passThroughParams) {
      $dara.Model.validateMap(this.passThroughParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPassThroughAuthInfoResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  data?: GetPassThroughAuthInfoResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 7B0FC4BC-9E4B-5AD7-9D35-6559BDC0788E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetPassThroughAuthInfoResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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


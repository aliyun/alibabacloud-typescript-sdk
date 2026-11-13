// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveNotificationRegistrationResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * {
   *     "updatedTime": 1793206576425,
   *     "accessPoint": "http://www.aliyun.com",
   *     "accessPointType": "ENDPOINT",
   *     "instanceId": "b3865dc3-4fa-4fd-9f4-dc7cda305a24",
   *     "createdTime": 1793206552000,
   *     "topic": "TOPIC_WEBHOOK",
   *     "authType": "USERNAME_PASSWORD",
   *     "mqType": "WEBHOOK",
   *     "username": "**************"
   *   }
   */
  data?: any;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * E85B7837-1E06-5180-B2AD-13B546D596D0
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
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
      code: 'string',
      data: 'any',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


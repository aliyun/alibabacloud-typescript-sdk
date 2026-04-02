// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTempFileTaskResponseBody extends $dara.Model {
  /**
   * @example
   * "200"
   */
  code?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtExpiredTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @remarks
   * Owner Id
   * 
   * @example
   * 1612285282502324
   */
  ownerId?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 1612285282502324
   */
  userId?: string;
  /**
   * @example
   * tempfile-05cexxxxxxxxx
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      gmtCreateTime: 'GmtCreateTime',
      gmtExpiredTime: 'GmtExpiredTime',
      gmtModifiedTime: 'GmtModifiedTime',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      ownerId: 'OwnerId',
      requestId: 'RequestId',
      success: 'Success',
      userId: 'UserId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      gmtCreateTime: 'string',
      gmtExpiredTime: 'string',
      gmtModifiedTime: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      ownerId: 'string',
      requestId: 'string',
      success: 'boolean',
      userId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


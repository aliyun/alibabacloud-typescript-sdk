// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupPublicUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-11-12T03:08:56Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The project group ID.
   * 
   * @example
   * group_delivery
   */
  groupId?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The knowledge base name.
   * 
   * @example
   * p-toolset-80a4520e-b35c-4e8b-acf7-3a01c7307522
   */
  name?: string;
  /**
   * @remarks
   * The URL of the web page.
   * 
   * @example
   * https://mp.weixin.qq.com/s/iHqLKhkJcOyHNCOGejO32A
   */
  originalUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The permission scope.
   * 
   * @example
   * PERSONAL
   */
  scope?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * The refund status. If a refund is in progress, query to confirm the refund status. Valid values:
   * - SUCCESS: All succeeded.
   * - FAIL: Failed.
   * - WAIT_PAY: Waiting for refund.
   * - EXPIRE: Expired.
   * - PAYING: Refund in progress.
   * - TERMINATE: Refund terminated.
   * 
   * @example
   * READY
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      directoryId: 'directoryId',
      gmtCreate: 'gmtCreate',
      groupId: 'groupId',
      message: 'message',
      name: 'name',
      originalUrl: 'originalUrl',
      requestId: 'requestId',
      scope: 'scope',
      sourceId: 'sourceId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      directoryId: 'string',
      gmtCreate: 'string',
      groupId: 'string',
      message: 'string',
      name: 'string',
      originalUrl: 'string',
      requestId: 'string',
      scope: 'string',
      sourceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


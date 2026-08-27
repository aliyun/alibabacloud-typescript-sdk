// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAnnouncementResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business ID of the notice.
   * 
   * @example
   * 1001
   */
  announcementId?: number;
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
   * The creator.
   * 
   * @example
   * 10001
   */
  createdBy?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The publish time in ISO 8601 format. This field is empty for drafts.
   * 
   * @example
   * 2026-08-20T14:00:00+08:00
   */
  publishedAt?: string;
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
   * The source type of the dictionary file. Valid values: OSS: Object Storage Service (OSS). ORIGIN: retains the previously uploaded dictionary.
   * 
   * @example
   * PLATFORM
   */
  sourceType?: string;
  /**
   * @remarks
   * The refund status. You must query this field to confirm the refund status during processing. Valid values:
   * - SUCCESS: All refunds succeeded.
   * - FAIL: Failed.
   * - WAIT_PAY: Waiting for refund.
   * - EXPIRE: Expired.
   * - PAYING: Refund in progress.
   * - TERMINATE: Refund terminated.
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      announcementId: 'announcementId',
      code: 'code',
      createdBy: 'createdBy',
      message: 'message',
      publishedAt: 'publishedAt',
      requestId: 'requestId',
      sourceType: 'sourceType',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      announcementId: 'number',
      code: 'string',
      createdBy: 'number',
      message: 'string',
      publishedAt: 'string',
      requestId: 'string',
      sourceType: 'string',
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


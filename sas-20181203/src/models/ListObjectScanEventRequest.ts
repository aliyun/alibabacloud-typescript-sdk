// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListObjectScanEventRequest extends $dara.Model {
  /**
   * @remarks
   * The batch operation type. Valid values:
   * 
   * - **sha256**: same file content
   * 
   * - **eventName**: same alerting type.
   * 
   * @example
   * sha256
   */
  batchType?: string;
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * ltrbuck****
   */
  bucketName?: string;
  /**
   * @remarks
   * The page number of the current page when you perform a paged query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 8925****
   */
  eventId?: number;
  /**
   * @remarks
   * The alert name.
   * 
   * @example
   * WebShell
   */
  eventName?: string;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The MD5 hash of the file.
   * 
   * @example
   * 0552c44e243abdea1729d4507bce****
   */
  md5?: string;
  /**
   * @remarks
   * The storage key of the file in the OSS bucket.
   * 
   * @example
   * 1/2022/06/23/15/41/16559701077444693a0c6-33b2-4cc2-a99f-9f38b8b8****
   */
  ossKey?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page when you perform a paged query.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * If the file is a sub-file within a compressed archive, **ParentEventId** specifies the event ID of the alert for the compressed archive itself.
   * 
   * To retrieve and query alert events for sub-files within a compressed archive:
   * 
   * 1. Call this operation and check the **HasSubEvent** response parameter. If the value is **true**, the corresponding **EventId** is the event ID of the alert for the compressed archive itself.
   * 2. Call this operation again and pass the **EventId** value to **ParentEventId** to view the alert events for the sub-files within the compressed archive.
   * 
   * @example
   * 1
   */
  parentEventId?: number;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * - **high**: high risk
   * 
   * - **medium**: medium risk
   * 
   * - **low**: low risk.
   * 
   * @example
   * low
   */
  riskLevel?: string;
  /**
   * @remarks
   * The data source. Valid values:
   * - **API**: API detection
   * - **OSS**: OSS detection.
   * 
   * @example
   * OSS
   */
  source?: string;
  /**
   * @remarks
   * The event status. Valid values:
   * 
   * - 0: unhandled 
   * - 1: manually handled
   * - 2: whitelisted
   * - 3: ignored
   * - 4: access denied.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The end time of the time range during which the exception event occurred.
   * 
   * @example
   * 1683862286000
   */
  timeEnd?: number;
  /**
   * @remarks
   * The start time of the time range during which the exception event occurred.
   * 
   * @example
   * 1683603086000
   */
  timeStart?: number;
  static names(): { [key: string]: string } {
    return {
      batchType: 'BatchType',
      bucketName: 'BucketName',
      currentPage: 'CurrentPage',
      eventId: 'EventId',
      eventName: 'EventName',
      lang: 'Lang',
      md5: 'Md5',
      ossKey: 'OssKey',
      pageSize: 'PageSize',
      parentEventId: 'ParentEventId',
      riskLevel: 'RiskLevel',
      source: 'Source',
      status: 'Status',
      timeEnd: 'TimeEnd',
      timeStart: 'TimeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchType: 'string',
      bucketName: 'string',
      currentPage: 'number',
      eventId: 'number',
      eventName: 'string',
      lang: 'string',
      md5: 'string',
      ossKey: 'string',
      pageSize: 'number',
      parentEventId: 'number',
      riskLevel: 'string',
      source: 'string',
      status: 'number',
      timeEnd: 'number',
      timeStart: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


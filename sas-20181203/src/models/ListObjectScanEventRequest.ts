// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListObjectScanEventRequest extends $dara.Model {
  batchType?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * ltrbuck****
   */
  bucketName?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  eventId?: number;
  /**
   * @remarks
   * The name of the alert.
   * 
   * @example
   * WebShell
   */
  eventName?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The MD5 hash value of the file.
   * 
   * @example
   * 0552c44e243abdea1729d4507bce****
   */
  md5?: string;
  /**
   * @remarks
   * The key of the file that is stored in an OSS bucket.
   * 
   * @example
   * 1/2022/06/23/15/41/16559701077444693a0c6-33b2-4cc2-a99f-9f38b8b8****
   */
  ossKey?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the alert that is generated for the package to which the subfile belongs.
   * 
   * @example
   * 1
   */
  parentEventId?: number;
  /**
   * @remarks
   * The risk level of the alert. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * low
   */
  riskLevel?: string;
  /**
   * @remarks
   * The method that is used to detect the malicious file. Valid values:
   * 
   * *   **API**: uses API operations.
   * *   **OSS**: uses Object Storage Service (OSS) file check.
   * 
   * @example
   * OSS
   */
  source?: string;
  status?: number;
  /**
   * @remarks
   * The end of the time range during which the exception is detected.
   * 
   * @example
   * 1683862286000
   */
  timeEnd?: number;
  /**
   * @remarks
   * The beginning of the time range during which the exception is detected.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListObjectScanEventRequest extends $dara.Model {
  /**
   * @example
   * sha256
   */
  batchType?: string;
  /**
   * @example
   * testBucket******
   */
  bucketName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 1
   */
  eventId?: number;
  /**
   * @example
   * WebShell
   */
  eventName?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * e991e62f484bb6accd676e57a9******
   */
  md5?: string;
  /**
   * @example
   * 1/2022/06/23/15/41/16559701077444693a0c6-33b2-4cc2-a99f-9f38b8b8****
   */
  ossKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  parentEventId?: number;
  /**
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @example
   * OSS
   */
  source?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 1683862286000
   */
  timeEnd?: number;
  /**
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


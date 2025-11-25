// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSdlEventListRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 47.100.102.XXX
   */
  dstIp?: string;
  /**
   * @example
   * 1756433077
   */
  endTime?: number;
  /**
   * @example
   * zh
   */
  lang?: string;
  location?: string;
  /**
   * @example
   * 0
   */
  onlyAiEvt?: number;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * S3
   */
  sensitiveLevel?: string;
  /**
   * @example
   * TotalBytes
   */
  sort?: string;
  /**
   * @example
   * 172.16.0.XXX
   */
  srcIp?: string;
  /**
   * @example
   * 1759198702
   */
  startTime?: number;
  /**
   * @example
   * aa58cdf6-6cf8-493c-912d-97619a24****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dstIp: 'DstIp',
      endTime: 'EndTime',
      lang: 'Lang',
      location: 'Location',
      onlyAiEvt: 'OnlyAiEvt',
      order: 'Order',
      pageSize: 'PageSize',
      sensitiveLevel: 'SensitiveLevel',
      sort: 'Sort',
      srcIp: 'SrcIp',
      startTime: 'StartTime',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dstIp: 'string',
      endTime: 'number',
      lang: 'string',
      location: 'string',
      onlyAiEvt: 'number',
      order: 'string',
      pageSize: 'number',
      sensitiveLevel: 'string',
      sort: 'string',
      srcIp: 'string',
      startTime: 'number',
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


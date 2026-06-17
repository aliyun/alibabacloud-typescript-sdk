// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSdlEventListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 47.100.102.XXX
   */
  dstIp?: string;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp representing seconds.
   * 
   * @example
   * 1756433077
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the response.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * Zhangjiakou
   */
  location?: string;
  /**
   * @remarks
   * Specifies whether to return only events detected by AI.
   * 
   * @example
   * 0
   */
  onlyAiEvt?: number;
  /**
   * @remarks
   * The sort order. Valid values: `asc` (ascending) and `desc` (descending).
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sensitivity level of the data in the event.
   * 
   * @example
   * S3
   */
  sensitiveLevel?: string;
  /**
   * @remarks
   * The field to sort by.
   * 
   * @example
   * TotalBytes
   */
  sort?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 172.16.0.XXX
   */
  srcIp?: string;
  /**
   * @remarks
   * The start of the time range to query. This value is a UNIX timestamp representing seconds.
   * 
   * @example
   * 1759198702
   */
  startTime?: number;
  /**
   * @remarks
   * The unique ID of the event.
   * 
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


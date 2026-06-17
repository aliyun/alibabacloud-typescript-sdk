// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSdlEventSdListRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
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
   * The end time. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1761185080
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
   * The number of the page to return.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * The start time. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1656664560
   */
  startTime?: number;
  /**
   * @remarks
   * The unique ID.
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
      pageSize: 'PageSize',
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
      pageSize: 'number',
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


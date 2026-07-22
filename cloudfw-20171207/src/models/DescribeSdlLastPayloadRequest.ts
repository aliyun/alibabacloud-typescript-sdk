// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSdlLastPayloadRequest extends $dara.Model {
  /**
   * @remarks
   * The destination IP address. This is an optional parameter used to filter by destination IP address.
   * 
   * @example
   * 47.100.102.XXX
   */
  dstIp?: string;
  /**
   * @remarks
   * The end time of the query (UNIX timestamp in seconds). This parameter is required. If this parameter is not specified, the API returns an error.
   * 
   * @example
   * 1534408267
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The type of sensitive credential. This parameter is required. If this parameter is not specified, the API returns an error.
   * 
   * @example
   * id_card
   */
  sensitiveCategory?: string;
  /**
   * @remarks
   * The source IP address. This is an optional parameter used to filter by source IP address.
   * 
   * @example
   * 121.40.84.XXX
   */
  srcIp?: string;
  /**
   * @remarks
   * The start time of the query (UNIX timestamp in seconds). This parameter is required. If this parameter is not specified, the API returns an error.
   * 
   * @example
   * 1656837360
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      dstIp: 'DstIp',
      endTime: 'EndTime',
      lang: 'Lang',
      sensitiveCategory: 'SensitiveCategory',
      srcIp: 'SrcIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstIp: 'string',
      endTime: 'number',
      lang: 'string',
      sensitiveCategory: 'string',
      srcIp: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


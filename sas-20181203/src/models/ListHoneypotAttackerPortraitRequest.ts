// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHoneypotAttackerPortraitRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: **1**. Pages start from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp.
   * 
   * @example
   * 1672285044000
   */
  endTimeStamp?: number;
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
   * The number of entries per page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The source IP address of the attack.
   * 
   * @example
   * 101.133.155.***
   */
  srcIp?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp.
   * 
   * @example
   * 1672249044000
   */
  startTimeStamp?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTimeStamp: 'EndTimeStamp',
      lang: 'Lang',
      pageSize: 'PageSize',
      srcIp: 'SrcIp',
      startTimeStamp: 'StartTimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTimeStamp: 'number',
      lang: 'string',
      pageSize: 'number',
      srcIp: 'string',
      startTimeStamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


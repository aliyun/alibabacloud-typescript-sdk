// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The timestamp that specifies the end of the time range to query.
   * 
   * @example
   * 1363453350000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The ID of the GTM instance whose logs you want to query.
   * 
   * @example
   * gtm-cn-xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The keyword for searching logs, in case-insensitive "%Keyword%" format.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The language used by the user.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * @example
   * 1363453340000
   */
  startTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'number',
      instanceId: 'string',
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


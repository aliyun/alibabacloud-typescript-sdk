// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The timestamp that specifies the end of the time range to query.
   * 
   * @example
   * 1516779348000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * instance1
   */
  instanceId?: string;
  /**
   * @remarks
   * The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
   * 
   * @example
   * demo
   */
  keyword?: string;
  /**
   * @remarks
   * The language to return some response parameters. Default value: en. Valid values: en, zh, and ja.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The timestamp that specifies the beginning of the time range to query.
   * 
   * @example
   * 1516779348000
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


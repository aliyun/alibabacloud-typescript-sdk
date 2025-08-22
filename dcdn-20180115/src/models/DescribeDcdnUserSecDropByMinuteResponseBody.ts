// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnUserSecDropByMinuteResponseBodyRows extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The number of packets blocked within 5 minutes.
   * 
   * @example
   * 264
   */
  drops?: number;
  /**
   * @remarks
   * The object that triggered rate limiting.
   * 
   * @example
   * Normal Mode
   */
  object?: string;
  /**
   * @remarks
   * The rule that was triggered.
   * 
   * @example
   * Normal Mode
   */
  ruleName?: string;
  /**
   * @remarks
   * The security feature that blocked the packets.
   * 
   * @example
   * robot
   */
  secFunc?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2021-01-31T15:04:04Z
   */
  tmStr?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      drops: 'Drops',
      object: 'Object',
      ruleName: 'RuleName',
      secFunc: 'SecFunc',
      tmStr: 'TmStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      drops: 'number',
      object: 'string',
      ruleName: 'string',
      secFunc: 'string',
      tmStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserSecDropByMinuteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of HTTP responses.
   * 
   * @example
   * OK
   */
  description?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  len?: number;
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8143fA8A-B2B2-4915-538D-546B538D25FA
   */
  requestId?: string;
  /**
   * @remarks
   * An array.
   */
  rows?: DescribeDcdnUserSecDropByMinuteResponseBodyRows[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5738
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      len: 'Len',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rows: 'Rows',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      len: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      rows: { 'type': 'array', 'itemType': DescribeDcdnUserSecDropByMinuteResponseBodyRows },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rows)) {
      $dara.Model.validateArray(this.rows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


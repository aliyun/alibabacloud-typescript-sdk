// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveApiStatisticResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The API.
   * 
   * @example
   * /api/login
   */
  apiFormat?: string;
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * d288137009c119a873d4c395****
   */
  apiId?: string;
  /**
   * @remarks
   * The number of outbound personal information entries by API.
   * 
   * @example
   * 78
   */
  infoCount?: number;
  /**
   * @remarks
   * The list of sensitive data types.
   */
  sensitiveCode?: string[];
  /**
   * @remarks
   * The number of outbound personal sensitive data entries by API.
   * 
   * @example
   * 55
   */
  sensitiveCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiFormat: 'ApiFormat',
      apiId: 'ApiId',
      infoCount: 'InfoCount',
      sensitiveCode: 'SensitiveCode',
      sensitiveCount: 'SensitiveCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiFormat: 'string',
      apiId: 'string',
      infoCount: 'number',
      sensitiveCode: { 'type': 'array', 'itemType': 'string' },
      sensitiveCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sensitiveCode)) {
      $dara.Model.validateArray(this.sensitiveCode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSensitiveApiStatisticResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of outbound personal information entries by domain name.
   * 
   * @example
   * 213
   */
  infoOutboundCount?: number;
  /**
   * @remarks
   * The list of statistics about APIs for the domain name.
   * 
   * > The statistics by API are returned only when you set the **Type** parameter to **apiFormat**.
   */
  list?: DescribeSensitiveApiStatisticResponseBodyDataList[];
  /**
   * @remarks
   * The domain name or IP address.
   * 
   * @example
   * www.***.top
   */
  matchedHost?: string;
  /**
   * @remarks
   * The number of outbound personal sensitive data entries by domain name.
   * 
   * @example
   * 127
   */
  sensitiveOutboundCount?: number;
  static names(): { [key: string]: string } {
    return {
      infoOutboundCount: 'InfoOutboundCount',
      list: 'List',
      matchedHost: 'MatchedHost',
      sensitiveOutboundCount: 'SensitiveOutboundCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoOutboundCount: 'number',
      list: { 'type': 'array', 'itemType': DescribeSensitiveApiStatisticResponseBodyDataList },
      matchedHost: 'string',
      sensitiveOutboundCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSensitiveApiStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of statistics.
   */
  data?: DescribeSensitiveApiStatisticResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeSensitiveApiStatisticResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


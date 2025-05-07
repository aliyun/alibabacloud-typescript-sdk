// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveStatisticResponseBodyData extends $dara.Model {
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
   * The IP address.
   * 
   * @example
   * 10.50.11.**
   */
  clientIP?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 169
   */
  count?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * a.****.com
   */
  matchedHost?: string;
  /**
   * @remarks
   * The type of the sensitive data.
   * 
   * >  You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported types of sensitive data.
   * 
   * @example
   * 1003
   */
  sensitiveCode?: string;
  static names(): { [key: string]: string } {
    return {
      apiFormat: 'ApiFormat',
      clientIP: 'ClientIP',
      count: 'Count',
      matchedHost: 'MatchedHost',
      sensitiveCode: 'SensitiveCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiFormat: 'string',
      clientIP: 'string',
      count: 'number',
      matchedHost: 'string',
      sensitiveCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


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
   * The number of personal information records involved in cross-border data transfer by API.
   * 
   * @example
   * 78
   */
  infoCount?: number;
  /**
   * @remarks
   * The types of sensitive data.
   */
  sensitiveCode?: string[];
  /**
   * @remarks
   * The number of sensitive personal information records involved in cross-border data transfer by API.
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


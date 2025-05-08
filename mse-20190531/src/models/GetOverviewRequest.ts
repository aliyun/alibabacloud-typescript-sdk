// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOverviewRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The query time. Unit: days. For example, if you set this parameter to 30, the governance rules within the last 30 days are queried.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      period: 'Period',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      period: 'number',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


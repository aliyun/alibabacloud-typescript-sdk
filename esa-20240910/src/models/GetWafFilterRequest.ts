// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWafFilterRequest extends $dara.Model {
  /**
   * @remarks
   * The WAF rule category to which the filter conditions to query belong.
   * 
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @remarks
   * The condition for matching incoming requests.
   * 
   * @example
   * characteristics
   */
  target?: string;
  /**
   * @remarks
   * The rule type.
   * 
   * @example
   * http_custom_cc
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      phase: 'Phase',
      siteId: 'SiteId',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phase: 'string',
      siteId: 'number',
      target: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


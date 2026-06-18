// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWafFilterRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the WAF phase from which to retrieve the matching engine information.
   * 
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @remarks
   * Specifies the ID of the site. You can get this ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @remarks
   * Specifies the application target of the matching engine.
   * 
   * @example
   * characteristics
   */
  target?: string;
  /**
   * @remarks
   * Specifies the rule type.
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


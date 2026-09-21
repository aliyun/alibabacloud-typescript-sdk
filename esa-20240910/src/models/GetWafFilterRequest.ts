// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWafFilterRequest extends $dara.Model {
  /**
   * @remarks
   * The WAF phase. Specifies the WAF phase for which to query the match engine information.
   * 
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the site ID.
   * 
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @remarks
   * The target. Defines the application target of the match engine.
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


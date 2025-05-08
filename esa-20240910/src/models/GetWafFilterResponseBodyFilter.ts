// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWafFilterResponseBodyFilterFields } from "./GetWafFilterResponseBodyFilterFields";


export class GetWafFilterResponseBodyFilter extends $dara.Model {
  /**
   * @remarks
   * The matched objects and related properties.
   */
  fields?: GetWafFilterResponseBodyFilterFields[];
  /**
   * @remarks
   * The WAF rule category.
   * 
   * @example
   * http_bot
   */
  phase?: string;
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
      fields: 'Fields',
      phase: 'Phase',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': GetWafFilterResponseBodyFilterFields },
      phase: 'string',
      target: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


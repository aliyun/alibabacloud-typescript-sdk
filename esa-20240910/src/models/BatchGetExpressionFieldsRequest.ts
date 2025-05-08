// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchGetExpressionFieldsRequestExpressions } from "./BatchGetExpressionFieldsRequestExpressions";


export class BatchGetExpressionFieldsRequest extends $dara.Model {
  /**
   * @remarks
   * List of expressions.
   * 
   * @example
   * http_bot
   */
  expressions?: BatchGetExpressionFieldsRequestExpressions[];
  /**
   * @remarks
   * WAF Phase
   * 
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @remarks
   * Site ID
   * 
   * @example
   * 1
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      expressions: 'Expressions',
      phase: 'Phase',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressions: { 'type': 'array', 'itemType': BatchGetExpressionFieldsRequestExpressions },
      phase: 'string',
      siteId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.expressions)) {
      $dara.Model.validateArray(this.expressions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


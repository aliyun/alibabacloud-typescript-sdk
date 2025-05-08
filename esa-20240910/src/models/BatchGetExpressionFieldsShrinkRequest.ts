// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetExpressionFieldsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * List of expressions.
   * 
   * @example
   * http_bot
   */
  expressionsShrink?: string;
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
      expressionsShrink: 'Expressions',
      phase: 'Phase',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressionsShrink: 'string',
      phase: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


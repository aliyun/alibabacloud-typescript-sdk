// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetExpressionFieldsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A list of expression objects to process.
   * 
   * @example
   * http_bot
   */
  expressionsShrink?: string;
  instanceId?: string;
  kind?: string;
  /**
   * @remarks
   * The WAF phase.
   * 
   * @example
   * http_bot
   */
  phase?: string;
  planNameEn?: string;
  /**
   * @remarks
   * The ID of the site.
   * 
   * @example
   * 1
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      expressionsShrink: 'Expressions',
      instanceId: 'InstanceId',
      kind: 'Kind',
      phase: 'Phase',
      planNameEn: 'PlanNameEn',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressionsShrink: 'string',
      instanceId: 'string',
      kind: 'string',
      phase: 'string',
      planNameEn: 'string',
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


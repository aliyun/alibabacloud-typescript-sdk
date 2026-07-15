// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetExpressionFieldsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of expressions.
   * 
   * @example
   * http_bot
   */
  expressionsShrink?: string;
  /**
   * @remarks
   * The plan instance ID.
   * 
   * @example
   * esa-site-bitkull7uubk
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the expression.
   * 
   * @example
   * wireshark
   */
  kind?: string;
  /**
   * @remarks
   * The WAF phase.
   * 
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @remarks
   * The plan name (in English).
   * 
   * @example
   * entranceplan
   */
  planNameEn?: string;
  /**
   * @remarks
   * The site ID.
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


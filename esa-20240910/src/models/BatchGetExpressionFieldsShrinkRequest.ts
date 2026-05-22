// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetExpressionFieldsShrinkRequest extends $dara.Model {
  expressionsShrink?: string;
  instanceId?: string;
  kind?: string;
  /**
   * @example
   * http_bot
   */
  phase?: string;
  planNameEn?: string;
  /**
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


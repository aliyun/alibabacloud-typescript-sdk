// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetExpressionFieldsRequestExpressions extends $dara.Model {
  expression?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetExpressionFieldsRequest extends $dara.Model {
  expressions?: BatchGetExpressionFieldsRequestExpressions[];
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
      expressions: 'Expressions',
      instanceId: 'InstanceId',
      kind: 'Kind',
      phase: 'Phase',
      planNameEn: 'PlanNameEn',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressions: { 'type': 'array', 'itemType': BatchGetExpressionFieldsRequestExpressions },
      instanceId: 'string',
      kind: 'string',
      phase: 'string',
      planNameEn: 'string',
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


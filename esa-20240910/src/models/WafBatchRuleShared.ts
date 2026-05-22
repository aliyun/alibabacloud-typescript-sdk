// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleMatch2 } from "./WafRuleMatch2";


/**
 */
export class WafBatchRuleSharedActionsResponse extends $dara.Model {
  /**
   * @remarks
   * The custom response code.
   * 
   * @example
   * 403
   */
  code?: number;
  /**
   * @remarks
   * The ID of the custom response page.
   * 
   * @example
   * 50000001
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
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

export class WafBatchRuleSharedActions extends $dara.Model {
  /**
   * @remarks
   * The custom response.
   */
  response?: WafBatchRuleSharedActionsResponse;
  static names(): { [key: string]: string } {
    return {
      response: 'Response',
    };
  }

  static types(): { [key: string]: any } {
    return {
      response: WafBatchRuleSharedActionsResponse,
    };
  }

  validate() {
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafBatchRuleShared extends $dara.Model {
  /**
   * @remarks
   * The action that you want WAF to perform on requests that match the rule.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * The extended action configurations.
   */
  actions?: WafBatchRuleSharedActions;
  /**
   * @remarks
   * Specifies the cross-domain website ID.
   * 
   * @example
   * 10000001
   */
  crossSiteId?: number;
  /**
   * @remarks
   * The expression.
   * 
   * @example
   * ip.src eq 1.1.1.1
   */
  expression?: string;
  /**
   * @remarks
   * The matching rule.
   */
  match?: WafRuleMatch2;
  /**
   * @remarks
   * Web SDK integration method: automatic integration (automatic) or manual integration (manual).
   * 
   * @example
   * automatic
   */
  mode?: string;
  /**
   * @remarks
   * The ruleset name.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * Protection type: web or app.
   * 
   * @example
   * web
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actions: 'Actions',
      crossSiteId: 'CrossSiteId',
      expression: 'Expression',
      match: 'Match',
      mode: 'Mode',
      name: 'Name',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actions: WafBatchRuleSharedActions,
      crossSiteId: 'number',
      expression: 'string',
      match: WafRuleMatch2,
      mode: 'string',
      name: 'string',
      target: 'string',
    };
  }

  validate() {
    if(this.actions && typeof (this.actions as any).validate === 'function') {
      (this.actions as any).validate();
    }
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


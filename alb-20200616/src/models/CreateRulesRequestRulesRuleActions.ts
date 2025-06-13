// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRulesRequestRulesRuleActionsCorsConfig } from "./CreateRulesRequestRulesRuleActionsCorsConfig";
import { CreateRulesRequestRulesRuleActionsFixedResponseConfig } from "./CreateRulesRequestRulesRuleActionsFixedResponseConfig";
import { CreateRulesRequestRulesRuleActionsForwardGroupConfig } from "./CreateRulesRequestRulesRuleActionsForwardGroupConfig";
import { CreateRulesRequestRulesRuleActionsInsertHeaderConfig } from "./CreateRulesRequestRulesRuleActionsInsertHeaderConfig";
import { CreateRulesRequestRulesRuleActionsRedirectConfig } from "./CreateRulesRequestRulesRuleActionsRedirectConfig";
import { CreateRulesRequestRulesRuleActionsRemoveHeaderConfig } from "./CreateRulesRequestRulesRuleActionsRemoveHeaderConfig";
import { CreateRulesRequestRulesRuleActionsRewriteConfig } from "./CreateRulesRequestRulesRuleActionsRewriteConfig";
import { CreateRulesRequestRulesRuleActionsTrafficLimitConfig } from "./CreateRulesRequestRulesRuleActionsTrafficLimitConfig";
import { CreateRulesRequestRulesRuleActionsTrafficMirrorConfig } from "./CreateRulesRequestRulesRuleActionsTrafficMirrorConfig";


export class CreateRulesRequestRulesRuleActions extends $dara.Model {
  corsConfig?: CreateRulesRequestRulesRuleActionsCorsConfig;
  fixedResponseConfig?: CreateRulesRequestRulesRuleActionsFixedResponseConfig;
  forwardGroupConfig?: CreateRulesRequestRulesRuleActionsForwardGroupConfig;
  insertHeaderConfig?: CreateRulesRequestRulesRuleActionsInsertHeaderConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  order?: number;
  redirectConfig?: CreateRulesRequestRulesRuleActionsRedirectConfig;
  removeHeaderConfig?: CreateRulesRequestRulesRuleActionsRemoveHeaderConfig;
  rewriteConfig?: CreateRulesRequestRulesRuleActionsRewriteConfig;
  trafficLimitConfig?: CreateRulesRequestRulesRuleActionsTrafficLimitConfig;
  trafficMirrorConfig?: CreateRulesRequestRulesRuleActionsTrafficMirrorConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      corsConfig: 'CorsConfig',
      fixedResponseConfig: 'FixedResponseConfig',
      forwardGroupConfig: 'ForwardGroupConfig',
      insertHeaderConfig: 'InsertHeaderConfig',
      order: 'Order',
      redirectConfig: 'RedirectConfig',
      removeHeaderConfig: 'RemoveHeaderConfig',
      rewriteConfig: 'RewriteConfig',
      trafficLimitConfig: 'TrafficLimitConfig',
      trafficMirrorConfig: 'TrafficMirrorConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corsConfig: CreateRulesRequestRulesRuleActionsCorsConfig,
      fixedResponseConfig: CreateRulesRequestRulesRuleActionsFixedResponseConfig,
      forwardGroupConfig: CreateRulesRequestRulesRuleActionsForwardGroupConfig,
      insertHeaderConfig: CreateRulesRequestRulesRuleActionsInsertHeaderConfig,
      order: 'number',
      redirectConfig: CreateRulesRequestRulesRuleActionsRedirectConfig,
      removeHeaderConfig: CreateRulesRequestRulesRuleActionsRemoveHeaderConfig,
      rewriteConfig: CreateRulesRequestRulesRuleActionsRewriteConfig,
      trafficLimitConfig: CreateRulesRequestRulesRuleActionsTrafficLimitConfig,
      trafficMirrorConfig: CreateRulesRequestRulesRuleActionsTrafficMirrorConfig,
      type: 'string',
    };
  }

  validate() {
    if(this.corsConfig && typeof (this.corsConfig as any).validate === 'function') {
      (this.corsConfig as any).validate();
    }
    if(this.fixedResponseConfig && typeof (this.fixedResponseConfig as any).validate === 'function') {
      (this.fixedResponseConfig as any).validate();
    }
    if(this.forwardGroupConfig && typeof (this.forwardGroupConfig as any).validate === 'function') {
      (this.forwardGroupConfig as any).validate();
    }
    if(this.insertHeaderConfig && typeof (this.insertHeaderConfig as any).validate === 'function') {
      (this.insertHeaderConfig as any).validate();
    }
    if(this.redirectConfig && typeof (this.redirectConfig as any).validate === 'function') {
      (this.redirectConfig as any).validate();
    }
    if(this.removeHeaderConfig && typeof (this.removeHeaderConfig as any).validate === 'function') {
      (this.removeHeaderConfig as any).validate();
    }
    if(this.rewriteConfig && typeof (this.rewriteConfig as any).validate === 'function') {
      (this.rewriteConfig as any).validate();
    }
    if(this.trafficLimitConfig && typeof (this.trafficLimitConfig as any).validate === 'function') {
      (this.trafficLimitConfig as any).validate();
    }
    if(this.trafficMirrorConfig && typeof (this.trafficMirrorConfig as any).validate === 'function') {
      (this.trafficMirrorConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


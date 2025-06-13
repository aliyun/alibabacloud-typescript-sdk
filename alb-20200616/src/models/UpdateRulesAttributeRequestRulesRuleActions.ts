// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateRulesAttributeRequestRulesRuleActionsCorsConfig } from "./UpdateRulesAttributeRequestRulesRuleActionsCorsConfig";
import { UpdateRulesAttributeRequestRulesRuleActionsFixedResponseConfig } from "./UpdateRulesAttributeRequestRulesRuleActionsFixedResponseConfig";
import { UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfig } from "./UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfig";
import { UpdateRulesAttributeRequestRulesRuleActionsInsertHeaderConfig } from "./UpdateRulesAttributeRequestRulesRuleActionsInsertHeaderConfig";
import { UpdateRulesAttributeRequestRulesRuleActionsRedirectConfig } from "./UpdateRulesAttributeRequestRulesRuleActionsRedirectConfig";
import { UpdateRulesAttributeRequestRulesRuleActionsRemoveHeaderConfig } from "./UpdateRulesAttributeRequestRulesRuleActionsRemoveHeaderConfig";
import { UpdateRulesAttributeRequestRulesRuleActionsRewriteConfig } from "./UpdateRulesAttributeRequestRulesRuleActionsRewriteConfig";
import { UpdateRulesAttributeRequestRulesRuleActionsTrafficLimitConfig } from "./UpdateRulesAttributeRequestRulesRuleActionsTrafficLimitConfig";
import { UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfig } from "./UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfig";


export class UpdateRulesAttributeRequestRulesRuleActions extends $dara.Model {
  corsConfig?: UpdateRulesAttributeRequestRulesRuleActionsCorsConfig;
  fixedResponseConfig?: UpdateRulesAttributeRequestRulesRuleActionsFixedResponseConfig;
  forwardGroupConfig?: UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfig;
  insertHeaderConfig?: UpdateRulesAttributeRequestRulesRuleActionsInsertHeaderConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  order?: number;
  redirectConfig?: UpdateRulesAttributeRequestRulesRuleActionsRedirectConfig;
  removeHeaderConfig?: UpdateRulesAttributeRequestRulesRuleActionsRemoveHeaderConfig;
  rewriteConfig?: UpdateRulesAttributeRequestRulesRuleActionsRewriteConfig;
  trafficLimitConfig?: UpdateRulesAttributeRequestRulesRuleActionsTrafficLimitConfig;
  trafficMirrorConfig?: UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfig;
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
      corsConfig: UpdateRulesAttributeRequestRulesRuleActionsCorsConfig,
      fixedResponseConfig: UpdateRulesAttributeRequestRulesRuleActionsFixedResponseConfig,
      forwardGroupConfig: UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfig,
      insertHeaderConfig: UpdateRulesAttributeRequestRulesRuleActionsInsertHeaderConfig,
      order: 'number',
      redirectConfig: UpdateRulesAttributeRequestRulesRuleActionsRedirectConfig,
      removeHeaderConfig: UpdateRulesAttributeRequestRulesRuleActionsRemoveHeaderConfig,
      rewriteConfig: UpdateRulesAttributeRequestRulesRuleActionsRewriteConfig,
      trafficLimitConfig: UpdateRulesAttributeRequestRulesRuleActionsTrafficLimitConfig,
      trafficMirrorConfig: UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfig,
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


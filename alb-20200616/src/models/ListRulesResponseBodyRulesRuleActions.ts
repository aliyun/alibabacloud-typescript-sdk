// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRulesResponseBodyRulesRuleActionsCorsConfig } from "./ListRulesResponseBodyRulesRuleActionsCorsConfig";
import { ListRulesResponseBodyRulesRuleActionsFixedResponseConfig } from "./ListRulesResponseBodyRulesRuleActionsFixedResponseConfig";
import { ListRulesResponseBodyRulesRuleActionsForwardGroupConfig } from "./ListRulesResponseBodyRulesRuleActionsForwardGroupConfig";
import { ListRulesResponseBodyRulesRuleActionsInsertHeaderConfig } from "./ListRulesResponseBodyRulesRuleActionsInsertHeaderConfig";
import { ListRulesResponseBodyRulesRuleActionsRedirectConfig } from "./ListRulesResponseBodyRulesRuleActionsRedirectConfig";
import { ListRulesResponseBodyRulesRuleActionsRemoveHeaderConfig } from "./ListRulesResponseBodyRulesRuleActionsRemoveHeaderConfig";
import { ListRulesResponseBodyRulesRuleActionsRewriteConfig } from "./ListRulesResponseBodyRulesRuleActionsRewriteConfig";
import { ListRulesResponseBodyRulesRuleActionsTrafficLimitConfig } from "./ListRulesResponseBodyRulesRuleActionsTrafficLimitConfig";
import { ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfig } from "./ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfig";


export class ListRulesResponseBodyRulesRuleActions extends $dara.Model {
  /**
   * @remarks
   * The CORS configuration.
   */
  corsConfig?: ListRulesResponseBodyRulesRuleActionsCorsConfig;
  /**
   * @remarks
   * The configuration of the custom response.
   */
  fixedResponseConfig?: ListRulesResponseBodyRulesRuleActionsFixedResponseConfig;
  /**
   * @remarks
   * The configurations of the server groups.
   */
  forwardGroupConfig?: ListRulesResponseBodyRulesRuleActionsForwardGroupConfig;
  /**
   * @remarks
   * The key of the header to be inserted.
   */
  insertHeaderConfig?: ListRulesResponseBodyRulesRuleActionsInsertHeaderConfig;
  /**
   * @remarks
   * The priority of the action. Valid values: **1 to 50000**. A smaller value indicates a higher priority. The actions of a forwarding rule are applied in descending order of priority. This parameter cannot empty. The priority of each action within a forwarding rule must be unique.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The configuration of the redirect action.
   */
  redirectConfig?: ListRulesResponseBodyRulesRuleActionsRedirectConfig;
  /**
   * @remarks
   * The HTTP header to be removed.
   */
  removeHeaderConfig?: ListRulesResponseBodyRulesRuleActionsRemoveHeaderConfig;
  /**
   * @remarks
   * The configuration of the rewrite action.
   */
  rewriteConfig?: ListRulesResponseBodyRulesRuleActionsRewriteConfig;
  /**
   * @remarks
   * The configuration of traffic throttling.
   */
  trafficLimitConfig?: ListRulesResponseBodyRulesRuleActionsTrafficLimitConfig;
  /**
   * @remarks
   * The configuration of traffic mirroring.
   */
  trafficMirrorConfig?: ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfig;
  /**
   * @remarks
   * The action. Valid values:
   * 
   * *   **ForwardGroup**: distributes requests to multiple vServer groups.
   * *   **Redirect**: redirects requests.
   * *   **FixedResponse**: returns a custom response.
   * *   **Rewrite**: rewrites requests.
   * *   **InsertHeader**: inserts headers.
   * *   **RemoveHeaderConfig**: removes headers.
   * *   **TrafficLimitConfig**: throttles network traffic.
   * *   **TrafficMirrorConfig**: mirrors network traffic.
   * *   **CorsConfig**: forwards requests based on CORS.
   * 
   * The preceding actions can be classified into two broad types:
   * 
   * *   **FinalType**: Each forwarding rule can contain only one FinalType action, which is performed at the end. You can specify only one of **ForwardGroup**, **Redirect**, and **FixedResponse**.
   * *   **ExtType**: Each forwarding rule can contain one or more **ExtType** actions, which are performed before the **FinalType** action. If you want to specify an ExtType action, you must also specify a **FinalType** action. You can specify multiple **InsertHeader** actions or one **Rewrite** action.
   * 
   * @example
   * ForwardGroup
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
      corsConfig: ListRulesResponseBodyRulesRuleActionsCorsConfig,
      fixedResponseConfig: ListRulesResponseBodyRulesRuleActionsFixedResponseConfig,
      forwardGroupConfig: ListRulesResponseBodyRulesRuleActionsForwardGroupConfig,
      insertHeaderConfig: ListRulesResponseBodyRulesRuleActionsInsertHeaderConfig,
      order: 'number',
      redirectConfig: ListRulesResponseBodyRulesRuleActionsRedirectConfig,
      removeHeaderConfig: ListRulesResponseBodyRulesRuleActionsRemoveHeaderConfig,
      rewriteConfig: ListRulesResponseBodyRulesRuleActionsRewriteConfig,
      trafficLimitConfig: ListRulesResponseBodyRulesRuleActionsTrafficLimitConfig,
      trafficMirrorConfig: ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfig,
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


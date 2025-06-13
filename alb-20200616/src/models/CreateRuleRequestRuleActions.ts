// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRuleRequestRuleActionsCorsConfig } from "./CreateRuleRequestRuleActionsCorsConfig";
import { CreateRuleRequestRuleActionsFixedResponseConfig } from "./CreateRuleRequestRuleActionsFixedResponseConfig";
import { CreateRuleRequestRuleActionsForwardGroupConfig } from "./CreateRuleRequestRuleActionsForwardGroupConfig";
import { CreateRuleRequestRuleActionsInsertHeaderConfig } from "./CreateRuleRequestRuleActionsInsertHeaderConfig";
import { CreateRuleRequestRuleActionsRedirectConfig } from "./CreateRuleRequestRuleActionsRedirectConfig";
import { CreateRuleRequestRuleActionsRemoveHeaderConfig } from "./CreateRuleRequestRuleActionsRemoveHeaderConfig";
import { CreateRuleRequestRuleActionsRewriteConfig } from "./CreateRuleRequestRuleActionsRewriteConfig";
import { CreateRuleRequestRuleActionsTrafficLimitConfig } from "./CreateRuleRequestRuleActionsTrafficLimitConfig";
import { CreateRuleRequestRuleActionsTrafficMirrorConfig } from "./CreateRuleRequestRuleActionsTrafficMirrorConfig";


export class CreateRuleRequestRuleActions extends $dara.Model {
  /**
   * @remarks
   * Request forwarding based on CORS.
   */
  corsConfig?: CreateRuleRequestRuleActionsCorsConfig;
  /**
   * @remarks
   * The configuration of the custom response.
   */
  fixedResponseConfig?: CreateRuleRequestRuleActionsFixedResponseConfig;
  /**
   * @remarks
   * The server groups to which requests are forwarded. You can specify at most five server groups for each forwarding rule.
   */
  forwardGroupConfig?: CreateRuleRequestRuleActionsForwardGroupConfig;
  /**
   * @remarks
   * The key of the header to be inserted.
   */
  insertHeaderConfig?: CreateRuleRequestRuleActionsInsertHeaderConfig;
  /**
   * @remarks
   * The priority of the action. Valid values: **1 to 50000**. A smaller value indicates a higher priority. The actions of a forwarding rule are applied in descending order of priority. This parameter cannot empty. The priority of each action within a forwarding rule must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The configuration of the redirect action.
   * 
   * >  Do not set all fields in **RedirectConfig** to default values, except for **httpCode**.
   */
  redirectConfig?: CreateRuleRequestRuleActionsRedirectConfig;
  /**
   * @remarks
   * The HTTP headers to be removed.
   */
  removeHeaderConfig?: CreateRuleRequestRuleActionsRemoveHeaderConfig;
  /**
   * @remarks
   * The configuration of the rewrite action.
   * 
   * >  If you specify multiple actions for a forwarding rule, you must configure the **ForwardGroup** parameter for the **RewriteConfig** action.
   */
  rewriteConfig?: CreateRuleRequestRuleActionsRewriteConfig;
  /**
   * @remarks
   * The configuration of the traffic throttling action.
   */
  trafficLimitConfig?: CreateRuleRequestRuleActionsTrafficLimitConfig;
  /**
   * @remarks
   * The configuration of the traffic mirroring action.
   */
  trafficMirrorConfig?: CreateRuleRequestRuleActionsTrafficMirrorConfig;
  /**
   * @remarks
   * The action. Valid values:
   * 
   * *   **ForwardGroup**: distributes requests to multiple vServer groups.
   * *   **Redirect**: redirects requests.
   * *   **FixedResponse**: returns a custom response.
   * *   **Rewrite**: rewrites requests.
   * *   **InsertHeader**: inserts headers.
   * *   **RemoveHeaderConfig:** deletes the header of a request.
   * *   **TrafficLimit**: throttles traffic.
   * *   **TrafficMirror**: mirrors network traffic.
   * *   **Cors**: enables cross-origin resource sharing (CORS).
   * 
   * The following action types are supported:
   * 
   * *   **FinalType**: Each forwarding rule can contain only one FinalType action, which is performed at the end. You can specify only one of **ForwardGroup**, **Redirect**, and **FixedResponse**.
   * *   **ExtType**: Each forwarding rule can contain one or more **ExtType** actions, which are performed before the **FinalType** action. If you want to specify an ExtType action, you must also specify a **FinalType** action. You can specify multiple **InsertHeader** actions or one **Rewrite** action.
   * 
   * This parameter is required.
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
      corsConfig: CreateRuleRequestRuleActionsCorsConfig,
      fixedResponseConfig: CreateRuleRequestRuleActionsFixedResponseConfig,
      forwardGroupConfig: CreateRuleRequestRuleActionsForwardGroupConfig,
      insertHeaderConfig: CreateRuleRequestRuleActionsInsertHeaderConfig,
      order: 'number',
      redirectConfig: CreateRuleRequestRuleActionsRedirectConfig,
      removeHeaderConfig: CreateRuleRequestRuleActionsRemoveHeaderConfig,
      rewriteConfig: CreateRuleRequestRuleActionsRewriteConfig,
      trafficLimitConfig: CreateRuleRequestRuleActionsTrafficLimitConfig,
      trafficMirrorConfig: CreateRuleRequestRuleActionsTrafficMirrorConfig,
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


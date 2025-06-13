// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateRuleAttributeRequestRuleActionsCorsConfig } from "./UpdateRuleAttributeRequestRuleActionsCorsConfig";
import { UpdateRuleAttributeRequestRuleActionsFixedResponseConfig } from "./UpdateRuleAttributeRequestRuleActionsFixedResponseConfig";
import { UpdateRuleAttributeRequestRuleActionsForwardGroupConfig } from "./UpdateRuleAttributeRequestRuleActionsForwardGroupConfig";
import { UpdateRuleAttributeRequestRuleActionsInsertHeaderConfig } from "./UpdateRuleAttributeRequestRuleActionsInsertHeaderConfig";
import { UpdateRuleAttributeRequestRuleActionsRedirectConfig } from "./UpdateRuleAttributeRequestRuleActionsRedirectConfig";
import { UpdateRuleAttributeRequestRuleActionsRemoveHeaderConfig } from "./UpdateRuleAttributeRequestRuleActionsRemoveHeaderConfig";
import { UpdateRuleAttributeRequestRuleActionsRewriteConfig } from "./UpdateRuleAttributeRequestRuleActionsRewriteConfig";
import { UpdateRuleAttributeRequestRuleActionsTrafficLimitConfig } from "./UpdateRuleAttributeRequestRuleActionsTrafficLimitConfig";
import { UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfig } from "./UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfig";


export class UpdateRuleAttributeRequestRuleActions extends $dara.Model {
  /**
   * @remarks
   * The CORS configuration.
   */
  corsConfig?: UpdateRuleAttributeRequestRuleActionsCorsConfig;
  /**
   * @remarks
   * The configuration of the custom response.
   */
  fixedResponseConfig?: UpdateRuleAttributeRequestRuleActionsFixedResponseConfig;
  /**
   * @remarks
   * The configuration of the server groups.
   */
  forwardGroupConfig?: UpdateRuleAttributeRequestRuleActionsForwardGroupConfig;
  /**
   * @remarks
   * The configuration of the header to be inserted.
   */
  insertHeaderConfig?: UpdateRuleAttributeRequestRuleActionsInsertHeaderConfig;
  /**
   * @remarks
   * The priority of the action. Valid values: **1 to 50000**. A smaller value specifies a higher priority. The actions of a forwarding rule are applied in descending order of priority. This parameter cannot be left empty. The priority of each action within a forwarding rule must be unique. You can specify up to 20 forwarding rule priorities.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The configuration of the redirect action. You can specify up to 20 redirect actions.
   */
  redirectConfig?: UpdateRuleAttributeRequestRuleActionsRedirectConfig;
  /**
   * @remarks
   * The HTTP header to be removed.
   */
  removeHeaderConfig?: UpdateRuleAttributeRequestRuleActionsRemoveHeaderConfig;
  /**
   * @remarks
   * The configuration of the rewrite action.
   */
  rewriteConfig?: UpdateRuleAttributeRequestRuleActionsRewriteConfig;
  /**
   * @remarks
   * The configuration of the action to throttle traffic.
   */
  trafficLimitConfig?: UpdateRuleAttributeRequestRuleActionsTrafficLimitConfig;
  /**
   * @remarks
   * The configuration of the traffic mirroring action.
   */
  trafficMirrorConfig?: UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfig;
  /**
   * @remarks
   * The type of the task. You can specify up to 11 types of action. Valid values:
   * 
   * *   **ForwardGroup**: forwards a request to multiple vServer groups.
   * *   **Redirect**: redirects requests.
   * *   **FixedResponse**: returns a fixed response.
   * *   **Rewrite**: rewrites requests.
   * *   **InsertHeader**: inserts a header.
   * *   **RemoveHeader**: deletes the header of a request.
   * *   **TrafficLimit**: throttles traffic.
   * *   **trafficMirror**: mirrors network traffic.
   * *   **Cors**: forwards requests based on CORS.
   * 
   * The preceding actions can be classified into two types:
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
      corsConfig: UpdateRuleAttributeRequestRuleActionsCorsConfig,
      fixedResponseConfig: UpdateRuleAttributeRequestRuleActionsFixedResponseConfig,
      forwardGroupConfig: UpdateRuleAttributeRequestRuleActionsForwardGroupConfig,
      insertHeaderConfig: UpdateRuleAttributeRequestRuleActionsInsertHeaderConfig,
      order: 'number',
      redirectConfig: UpdateRuleAttributeRequestRuleActionsRedirectConfig,
      removeHeaderConfig: UpdateRuleAttributeRequestRuleActionsRemoveHeaderConfig,
      rewriteConfig: UpdateRuleAttributeRequestRuleActionsRewriteConfig,
      trafficLimitConfig: UpdateRuleAttributeRequestRuleActionsTrafficLimitConfig,
      trafficMirrorConfig: UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfig,
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


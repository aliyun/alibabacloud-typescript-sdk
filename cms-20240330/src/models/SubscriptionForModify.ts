// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";
import { WorkspaceFilterSetting } from "./WorkspaceFilterSetting";
import { NotifyRouteForSubscription } from "./NotifyRouteForSubscription";


export class SubscriptionForModifyAgentConfig extends $dara.Model {
  agentUuid?: string;
  routes?: NotifyRouteForSubscription[];
  static names(): { [key: string]: string } {
    return {
      agentUuid: 'agentUuid',
      routes: 'routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentUuid: 'string',
      routes: { 'type': 'array', 'itemType': NotifyRouteForSubscription },
    };
  }

  validate() {
    if(Array.isArray(this.routes)) {
      $dara.Model.validateArray(this.routes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscriptionForModifyPushingSetting extends $dara.Model {
  /**
   * @remarks
   * The list of action plan IDs for alert pushing.
   */
  alertActionIds?: string[];
  /**
   * @remarks
   * The action plan ID.
   * 
   * @example
   * 123123123
   */
  responsePlanId?: string;
  /**
   * @remarks
   * The list of action integration plan IDs for recovery pushing.
   */
  restoreActionIds?: string[];
  /**
   * @remarks
   * The UUID of the template.
   * 
   * @example
   * 123123123
   */
  templateUuid?: string;
  static names(): { [key: string]: string } {
    return {
      alertActionIds: 'alertActionIds',
      responsePlanId: 'responsePlanId',
      restoreActionIds: 'restoreActionIds',
      templateUuid: 'templateUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertActionIds: { 'type': 'array', 'itemType': 'string' },
      responsePlanId: 'string',
      restoreActionIds: { 'type': 'array', 'itemType': 'string' },
      templateUuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertActionIds)) {
      $dara.Model.validateArray(this.alertActionIds);
    }
    if(Array.isArray(this.restoreActionIds)) {
      $dara.Model.validateArray(this.restoreActionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscriptionForModify extends $dara.Model {
  agentConfig?: SubscriptionForModifyAgentConfig;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * workspace test
   */
  description?: string;
  /**
   * @remarks
   * The filter settings.
   */
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * The UUID of the notification policy.
   * 
   * @example
   * 123123
   */
  notifyStrategyId?: string;
  /**
   * @remarks
   * The push settings.
   */
  pushingSetting?: SubscriptionForModifyPushingSetting;
  /**
   * @remarks
   * Specifies whether to subscribe to legacy product events (CMS 1.0, ARMS, or SLS events where workspace is null). Valid values:
   * - true: Subscribe.
   * - false or null: Do not subscribe.
   */
  subscribeLegacyEvent?: boolean;
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * Test subscription.
   */
  subscriptionName?: string;
  workspaceFilterSetting?: WorkspaceFilterSetting;
  static names(): { [key: string]: string } {
    return {
      agentConfig: 'agentConfig',
      description: 'description',
      filterSetting: 'filterSetting',
      notifyStrategyId: 'notifyStrategyId',
      pushingSetting: 'pushingSetting',
      subscribeLegacyEvent: 'subscribeLegacyEvent',
      subscriptionName: 'subscriptionName',
      workspaceFilterSetting: 'workspaceFilterSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentConfig: SubscriptionForModifyAgentConfig,
      description: 'string',
      filterSetting: FilterSetting,
      notifyStrategyId: 'string',
      pushingSetting: SubscriptionForModifyPushingSetting,
      subscribeLegacyEvent: 'boolean',
      subscriptionName: 'string',
      workspaceFilterSetting: WorkspaceFilterSetting,
    };
  }

  validate() {
    if(this.agentConfig && typeof (this.agentConfig as any).validate === 'function') {
      (this.agentConfig as any).validate();
    }
    if(this.filterSetting && typeof (this.filterSetting as any).validate === 'function') {
      (this.filterSetting as any).validate();
    }
    if(this.pushingSetting && typeof (this.pushingSetting as any).validate === 'function') {
      (this.pushingSetting as any).validate();
    }
    if(this.workspaceFilterSetting && typeof (this.workspaceFilterSetting as any).validate === 'function') {
      (this.workspaceFilterSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


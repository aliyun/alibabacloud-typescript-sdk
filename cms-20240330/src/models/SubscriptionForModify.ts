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
   * A list of alert push action plan IDs.
   */
  alertActionIds?: string[];
  /**
   * @remarks
   * Action plan ID.
   * 
   * @example
   * 123123123
   */
  responsePlanId?: string;
  /**
   * @remarks
   * A list of action integration plan IDs.
   */
  restoreActionIds?: string[];
  /**
   * @remarks
   * Template UUID.
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
   * Description.
   * 
   * @example
   * workspace test
   */
  description?: string;
  /**
   * @remarks
   * Filter settings.
   */
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * Notification policy UUID.
   * 
   * @example
   * 123123
   */
  notifyStrategyId?: string;
  /**
   * @remarks
   * Push settings.
   */
  pushingSetting?: SubscriptionForModifyPushingSetting;
  /**
   * @remarks
   * Name.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试订阅
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


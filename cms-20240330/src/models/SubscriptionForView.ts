// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";
import { WorkspaceFilterSetting } from "./WorkspaceFilterSetting";
import { NotifyRouteForSubscription } from "./NotifyRouteForSubscription";


export class SubscriptionForViewAgentConfig extends $dara.Model {
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

export class SubscriptionForViewPushingSetting extends $dara.Model {
  /**
   * @remarks
   * A list of action integration IDs for alert pushes.
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
   * A list of action integration IDs for recovery pushes.
   */
  restoreActionIds?: string[];
  /**
   * @remarks
   * The template UUID.
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

export class SubscriptionForView extends $dara.Model {
  agentConfig?: SubscriptionForViewAgentConfig;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  createTime?: string;
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
   * Indicates whether the subscription is enabled.
   * 
   * @example
   * false
   */
  enable?: boolean;
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
   * 23123123
   */
  notifyStrategyId?: string;
  /**
   * @remarks
   * The push settings.
   */
  pushingSetting?: SubscriptionForViewPushingSetting;
  /**
   * @remarks
   * The UUID.
   * 
   * @example
   * 123123123123
   */
  subscriptionId?: string;
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * 订阅测试
   */
  subscriptionName?: string;
  /**
   * @example
   * NORMAL
   */
  subscriptionType?: string;
  /**
   * @remarks
   * The source type of the synchronization policy.
   * 
   * @example
   * "ARMS"
   */
  syncFromType?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2025-05-23T02:29:02Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 123123123
   */
  userId?: string;
  /**
   * @remarks
   * Specifies the workspace.
   * 
   * @example
   * workspace-test
   */
  workspace?: string;
  workspaceFilterSetting?: WorkspaceFilterSetting;
  static names(): { [key: string]: string } {
    return {
      agentConfig: 'agentConfig',
      createTime: 'createTime',
      description: 'description',
      enable: 'enable',
      filterSetting: 'filterSetting',
      notifyStrategyId: 'notifyStrategyId',
      pushingSetting: 'pushingSetting',
      subscriptionId: 'subscriptionId',
      subscriptionName: 'subscriptionName',
      subscriptionType: 'subscriptionType',
      syncFromType: 'syncFromType',
      updateTime: 'updateTime',
      userId: 'userId',
      workspace: 'workspace',
      workspaceFilterSetting: 'workspaceFilterSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentConfig: SubscriptionForViewAgentConfig,
      createTime: 'string',
      description: 'string',
      enable: 'boolean',
      filterSetting: FilterSetting,
      notifyStrategyId: 'string',
      pushingSetting: SubscriptionForViewPushingSetting,
      subscriptionId: 'string',
      subscriptionName: 'string',
      subscriptionType: 'string',
      syncFromType: 'string',
      updateTime: 'string',
      userId: 'string',
      workspace: 'string',
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


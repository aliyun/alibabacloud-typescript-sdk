// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";
import { WorkspaceFilterSetting } from "./WorkspaceFilterSetting";


export class SubscriptionForModifyPushingSetting extends $dara.Model {
  /**
   * @remarks
   * Alert push action plan ID list.
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
   * Action integration plan ID list.
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
   * Filtering settings.
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
   * Test subscription.
   */
  subscriptionName?: string;
  workspaceFilterSetting?: WorkspaceFilterSetting;
  static names(): { [key: string]: string } {
    return {
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
      description: 'string',
      filterSetting: FilterSetting,
      notifyStrategyId: 'string',
      pushingSetting: SubscriptionForModifyPushingSetting,
      subscriptionName: 'string',
      workspaceFilterSetting: WorkspaceFilterSetting,
    };
  }

  validate() {
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


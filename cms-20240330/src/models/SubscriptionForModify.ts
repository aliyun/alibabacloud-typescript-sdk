// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";
import { WorkspaceFilterSetting } from "./WorkspaceFilterSetting";


export class SubscriptionForModifyPushingSetting extends $dara.Model {
  alertActionIds?: string[];
  responsePlanId?: string;
  restoreActionIds?: string[];
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
  description?: string;
  filterSetting?: FilterSetting;
  notifyStrategyId?: string;
  pushingSetting?: SubscriptionForModifyPushingSetting;
  /**
   * @remarks
   * This parameter is required.
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


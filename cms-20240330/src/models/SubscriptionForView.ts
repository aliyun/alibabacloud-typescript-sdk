// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";
import { SubscriptionForViewPushingSetting } from "./SubscriptionForViewPushingSetting";


export class SubscriptionForView extends $dara.Model {
  createTime?: string;
  description?: string;
  enable?: boolean;
  filterSetting?: FilterSetting;
  notifyStrategyId?: string;
  pushingSetting?: SubscriptionForViewPushingSetting;
  subscriptionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  subscriptionName?: string;
  updateTime?: string;
  userId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      enable: 'enable',
      filterSetting: 'filterSetting',
      notifyStrategyId: 'notifyStrategyId',
      pushingSetting: 'pushingSetting',
      subscriptionId: 'subscriptionId',
      subscriptionName: 'subscriptionName',
      updateTime: 'updateTime',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      enable: 'boolean',
      filterSetting: FilterSetting,
      notifyStrategyId: 'string',
      pushingSetting: SubscriptionForViewPushingSetting,
      subscriptionId: 'string',
      subscriptionName: 'string',
      updateTime: 'string',
      userId: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.filterSetting && typeof (this.filterSetting as any).validate === 'function') {
      (this.filterSetting as any).validate();
    }
    if(this.pushingSetting && typeof (this.pushingSetting as any).validate === 'function') {
      (this.pushingSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


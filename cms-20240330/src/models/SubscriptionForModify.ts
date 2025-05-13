// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";
import { SubscriptionForModifyPushingSetting } from "./SubscriptionForModifyPushingSetting";


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
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      filterSetting: 'filterSetting',
      notifyStrategyId: 'notifyStrategyId',
      pushingSetting: 'pushingSetting',
      subscriptionName: 'subscriptionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      filterSetting: FilterSetting,
      notifyStrategyId: 'string',
      pushingSetting: SubscriptionForModifyPushingSetting,
      subscriptionName: 'string',
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


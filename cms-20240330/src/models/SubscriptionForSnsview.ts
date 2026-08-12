// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";
import { WorkspaceFilterSetting } from "./WorkspaceFilterSetting";


export class SubscriptionForSNSView extends $dara.Model {
  createTime?: string;
  enable?: boolean;
  filterSetting?: FilterSetting;
  mode?: string;
  name?: string;
  /**
   * @remarks
   * The reverse association to SNS (= snsUuid).
   */
  notifyStrategyUuid?: string;
  regionId?: string;
  /**
   * @remarks
   * Indicates whether to subscribe to legacy product events (CMS 1.0, ARMS, or SLS events where workspace=null). Valid values: true: subscribed. false or null: not subscribed.
   */
  subscribeLegacyEvent?: boolean;
  subscriptionType?: string;
  syncFromType?: string;
  updateTime?: string;
  userId?: string;
  uuid?: string;
  workspace?: string;
  workspaceFilterSetting?: WorkspaceFilterSetting;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      enable: 'enable',
      filterSetting: 'filterSetting',
      mode: 'mode',
      name: 'name',
      notifyStrategyUuid: 'notifyStrategyUuid',
      regionId: 'regionId',
      subscribeLegacyEvent: 'subscribeLegacyEvent',
      subscriptionType: 'subscriptionType',
      syncFromType: 'syncFromType',
      updateTime: 'updateTime',
      userId: 'userId',
      uuid: 'uuid',
      workspace: 'workspace',
      workspaceFilterSetting: 'workspaceFilterSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      enable: 'boolean',
      filterSetting: FilterSetting,
      mode: 'string',
      name: 'string',
      notifyStrategyUuid: 'string',
      regionId: 'string',
      subscribeLegacyEvent: 'boolean',
      subscriptionType: 'string',
      syncFromType: 'string',
      updateTime: 'string',
      userId: 'string',
      uuid: 'string',
      workspace: 'string',
      workspaceFilterSetting: WorkspaceFilterSetting,
    };
  }

  validate() {
    if(this.filterSetting && typeof (this.filterSetting as any).validate === 'function') {
      (this.filterSetting as any).validate();
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


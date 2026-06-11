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
  notifyStrategyUuid?: string;
  regionId?: string;
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


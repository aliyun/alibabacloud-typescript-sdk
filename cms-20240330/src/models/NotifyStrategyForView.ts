// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NotifyStrategyForViewCustomTemplateEntries } from "./NotifyStrategyForViewCustomTemplateEntries";
import { NotifyStrategyForViewGroupingSetting } from "./NotifyStrategyForViewGroupingSetting";
import { NotifyStrategyForViewRoutes } from "./NotifyStrategyForViewRoutes";


export class NotifyStrategyForView extends $dara.Model {
  createTime?: string;
  customTemplateEntries?: NotifyStrategyForViewCustomTemplateEntries[];
  description?: string;
  enable?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  groupingSetting?: NotifyStrategyForViewGroupingSetting;
  ignoreRestoredNotification?: boolean;
  notifyStrategyId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  notifyStrategyName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  routes?: NotifyStrategyForViewRoutes[];
  updateTime?: string;
  userId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      customTemplateEntries: 'customTemplateEntries',
      description: 'description',
      enable: 'enable',
      groupingSetting: 'groupingSetting',
      ignoreRestoredNotification: 'ignoreRestoredNotification',
      notifyStrategyId: 'notifyStrategyId',
      notifyStrategyName: 'notifyStrategyName',
      routes: 'routes',
      updateTime: 'updateTime',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      customTemplateEntries: { 'type': 'array', 'itemType': NotifyStrategyForViewCustomTemplateEntries },
      description: 'string',
      enable: 'boolean',
      groupingSetting: NotifyStrategyForViewGroupingSetting,
      ignoreRestoredNotification: 'boolean',
      notifyStrategyId: 'string',
      notifyStrategyName: 'string',
      routes: { 'type': 'array', 'itemType': NotifyStrategyForViewRoutes },
      updateTime: 'string',
      userId: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customTemplateEntries)) {
      $dara.Model.validateArray(this.customTemplateEntries);
    }
    if(this.groupingSetting && typeof (this.groupingSetting as any).validate === 'function') {
      (this.groupingSetting as any).validate();
    }
    if(Array.isArray(this.routes)) {
      $dara.Model.validateArray(this.routes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


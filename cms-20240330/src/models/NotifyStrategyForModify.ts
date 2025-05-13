// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NotifyStrategyForModifyCustomTemplateEntries } from "./NotifyStrategyForModifyCustomTemplateEntries";
import { NotifyStrategyForModifyGroupingSetting } from "./NotifyStrategyForModifyGroupingSetting";
import { NotifyStrategyForModifyRoutes } from "./NotifyStrategyForModifyRoutes";


export class NotifyStrategyForModify extends $dara.Model {
  customTemplateEntries?: NotifyStrategyForModifyCustomTemplateEntries[];
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  groupingSetting?: NotifyStrategyForModifyGroupingSetting;
  ignoreRestoredNotification?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  notifyStrategyName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  routes?: NotifyStrategyForModifyRoutes[];
  static names(): { [key: string]: string } {
    return {
      customTemplateEntries: 'customTemplateEntries',
      description: 'description',
      groupingSetting: 'groupingSetting',
      ignoreRestoredNotification: 'ignoreRestoredNotification',
      notifyStrategyName: 'notifyStrategyName',
      routes: 'routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTemplateEntries: { 'type': 'array', 'itemType': NotifyStrategyForModifyCustomTemplateEntries },
      description: 'string',
      groupingSetting: NotifyStrategyForModifyGroupingSetting,
      ignoreRestoredNotification: 'boolean',
      notifyStrategyName: 'string',
      routes: { 'type': 'array', 'itemType': NotifyStrategyForModifyRoutes },
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


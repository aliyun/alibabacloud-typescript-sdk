// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";
import { WorkspaceFilterSetting } from "./WorkspaceFilterSetting";


export class SubscriptionConfig extends $dara.Model {
  /**
   * @remarks
   * The event content filtering conditions.
   * 
   * @example
   * {}
   */
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * Specifies whether to subscribe to legacy product events (events with an empty workspace from CMS 1.0, ARMS, or SLS). Valid values:
   * - true: Subscribe.
   * - false/null: Do not subscribe.
   * 
   * @example
   * false
   */
  subscribeLegacyEvent?: boolean;
  /**
   * @remarks
   * The cross-workspace event routing (global subscription) settings.
   * 
   * @example
   * {}
   */
  workspaceFilterSetting?: WorkspaceFilterSetting;
  static names(): { [key: string]: string } {
    return {
      filterSetting: 'filterSetting',
      subscribeLegacyEvent: 'subscribeLegacyEvent',
      workspaceFilterSetting: 'workspaceFilterSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterSetting: FilterSetting,
      subscribeLegacyEvent: 'boolean',
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


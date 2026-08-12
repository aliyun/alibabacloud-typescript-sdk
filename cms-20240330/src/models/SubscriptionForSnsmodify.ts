// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";
import { WorkspaceFilterSetting } from "./WorkspaceFilterSetting";


export class SubscriptionForSNSModify extends $dara.Model {
  /**
   * @remarks
   * The filter configuration.
   */
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * Specifies whether to subscribe to legacy product events (CMS 1.0, ARMS, or SLS events where workspace is null). Valid values:
   * - true: Subscribe.
   * - false or null: Do not subscribe.
   */
  subscribeLegacyEvent?: boolean;
  /**
   * @remarks
   * The workspace filter configuration.
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


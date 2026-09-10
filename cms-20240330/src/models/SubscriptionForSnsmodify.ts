// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";
import { WorkspaceFilterSetting } from "./WorkspaceFilterSetting";


export class SubscriptionForSNSModify extends $dara.Model {
  /**
   * @remarks
   * The event content filter that matches conditions based on event fields such as labels, source, and severity. If this parameter is not specified, no events are received.
   */
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * Specifies whether to subscribe to legacy product events (CMS 1.0, ARMS, or SLS events where workspace is null). Valid values:
   * - true: Subscribe to legacy product events.
   * - false or null: Do not subscribe to legacy product events.
   */
  subscribeLegacyEvent?: boolean;
  /**
   * @remarks
   * The global subscription configuration. If the subscription needs to receive events from other workspaces, specify the target workspace list by using workspaceUuids. If this parameter is not configured, only events from the current workspace are received.
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


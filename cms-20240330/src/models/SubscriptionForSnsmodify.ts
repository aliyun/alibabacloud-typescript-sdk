// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";
import { WorkspaceFilterSetting } from "./WorkspaceFilterSetting";


export class SubscriptionForSNSModify extends $dara.Model {
  filterSetting?: FilterSetting;
  workspaceFilterSetting?: WorkspaceFilterSetting;
  static names(): { [key: string]: string } {
    return {
      filterSetting: 'filterSetting',
      workspaceFilterSetting: 'workspaceFilterSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterSetting: FilterSetting,
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";


export class WorkspaceFilterSetting extends $dara.Model {
  tagSelector?: FilterSetting;
  workspaceUuids?: string[];
  static names(): { [key: string]: string } {
    return {
      tagSelector: 'tagSelector',
      workspaceUuids: 'workspaceUuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagSelector: FilterSetting,
      workspaceUuids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.tagSelector && typeof (this.tagSelector as any).validate === 'function') {
      (this.tagSelector as any).validate();
    }
    if(Array.isArray(this.workspaceUuids)) {
      $dara.Model.validateArray(this.workspaceUuids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


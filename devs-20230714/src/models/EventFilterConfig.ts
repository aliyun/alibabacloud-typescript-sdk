// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BranchFilter } from "./BranchFilter";


export class EventFilterConfig extends $dara.Model {
  branch?: BranchFilter;
  static names(): { [key: string]: string } {
    return {
      branch: 'branch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: BranchFilter,
    };
  }

  validate() {
    if(this.branch && typeof (this.branch as any).validate === 'function') {
      (this.branch as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


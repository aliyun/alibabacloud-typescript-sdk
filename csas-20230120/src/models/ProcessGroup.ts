// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ProcessItem } from "./ProcessItem";


export class ProcessGroup extends $dara.Model {
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  name?: string;
  processGroupId?: string;
  /**
   * **if can be null:**
   * false
   */
  processes?: ProcessItem[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      name: 'Name',
      processGroupId: 'ProcessGroupId',
      processes: 'Processes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      name: 'string',
      processGroupId: 'string',
      processes: { 'type': 'array', 'itemType': ProcessItem },
    };
  }

  validate() {
    if(Array.isArray(this.processes)) {
      $dara.Model.validateArray(this.processes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDBResourceGroupRequestRayConfigWorkerGroups } from "./CreateDbresourceGroupRequestRayConfigWorkerGroups";


export class CreateDBResourceGroupRequestRayConfig extends $dara.Model {
  category?: string;
  headSpec?: string;
  workerGroups?: CreateDBResourceGroupRequestRayConfigWorkerGroups[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      headSpec: 'HeadSpec',
      workerGroups: 'WorkerGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      headSpec: 'string',
      workerGroups: { 'type': 'array', 'itemType': CreateDBResourceGroupRequestRayConfigWorkerGroups },
    };
  }

  validate() {
    if(Array.isArray(this.workerGroups)) {
      $dara.Model.validateArray(this.workerGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


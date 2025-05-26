// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyDBResourceGroupRequestRayConfigWorkerGroups } from "./ModifyDbresourceGroupRequestRayConfigWorkerGroups";


export class ModifyDBResourceGroupRequestRayConfig extends $dara.Model {
  category?: string;
  headSpec?: string;
  workerGroups?: ModifyDBResourceGroupRequestRayConfigWorkerGroups[];
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
      workerGroups: { 'type': 'array', 'itemType': ModifyDBResourceGroupRequestRayConfigWorkerGroups },
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


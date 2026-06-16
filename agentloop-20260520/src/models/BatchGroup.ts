// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExperimentRecord } from "./ExperimentRecord";


export class BatchGroup extends $dara.Model {
  batchId?: string;
  records?: ExperimentRecord[];
  static names(): { [key: string]: string } {
    return {
      batchId: 'batchId',
      records: 'records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      records: { 'type': 'array', 'itemType': ExperimentRecord },
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaWorkflowExecutionListResponseBodyNonExistRunIds extends $dara.Model {
  runId?: string[];
  static names(): { [key: string]: string } {
    return {
      runId: 'RunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.runId)) {
      $dara.Model.validateArray(this.runId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


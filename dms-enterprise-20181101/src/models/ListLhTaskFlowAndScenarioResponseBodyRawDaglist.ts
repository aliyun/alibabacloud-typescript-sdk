// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLhTaskFlowAndScenarioResponseBodyRawDAGListDag } from "./ListLhTaskFlowAndScenarioResponseBodyRawDaglistDag";


export class ListLhTaskFlowAndScenarioResponseBodyRawDAGList extends $dara.Model {
  dag?: ListLhTaskFlowAndScenarioResponseBodyRawDAGListDag[];
  static names(): { [key: string]: string } {
    return {
      dag: 'Dag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dag: { 'type': 'array', 'itemType': ListLhTaskFlowAndScenarioResponseBodyRawDAGListDag },
    };
  }

  validate() {
    if(Array.isArray(this.dag)) {
      $dara.Model.validateArray(this.dag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


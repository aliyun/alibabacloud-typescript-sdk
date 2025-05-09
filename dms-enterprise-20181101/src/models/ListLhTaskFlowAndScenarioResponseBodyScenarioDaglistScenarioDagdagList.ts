// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLhTaskFlowAndScenarioResponseBodyScenarioDAGListScenarioDAGDagListDag } from "./ListLhTaskFlowAndScenarioResponseBodyScenarioDaglistScenarioDagdagListDag";


export class ListLhTaskFlowAndScenarioResponseBodyScenarioDAGListScenarioDAGDagList extends $dara.Model {
  dag?: ListLhTaskFlowAndScenarioResponseBodyScenarioDAGListScenarioDAGDagListDag[];
  static names(): { [key: string]: string } {
    return {
      dag: 'Dag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dag: { 'type': 'array', 'itemType': ListLhTaskFlowAndScenarioResponseBodyScenarioDAGListScenarioDAGDagListDag },
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


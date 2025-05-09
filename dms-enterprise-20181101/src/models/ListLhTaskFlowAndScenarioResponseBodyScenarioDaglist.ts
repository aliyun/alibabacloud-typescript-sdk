// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLhTaskFlowAndScenarioResponseBodyScenarioDAGListScenarioDAG } from "./ListLhTaskFlowAndScenarioResponseBodyScenarioDaglistScenarioDag";


export class ListLhTaskFlowAndScenarioResponseBodyScenarioDAGList extends $dara.Model {
  scenarioDAG?: ListLhTaskFlowAndScenarioResponseBodyScenarioDAGListScenarioDAG[];
  static names(): { [key: string]: string } {
    return {
      scenarioDAG: 'ScenarioDAG',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scenarioDAG: { 'type': 'array', 'itemType': ListLhTaskFlowAndScenarioResponseBodyScenarioDAGListScenarioDAG },
    };
  }

  validate() {
    if(Array.isArray(this.scenarioDAG)) {
      $dara.Model.validateArray(this.scenarioDAG);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


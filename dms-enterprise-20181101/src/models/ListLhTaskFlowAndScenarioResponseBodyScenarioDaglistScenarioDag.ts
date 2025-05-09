// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLhTaskFlowAndScenarioResponseBodyScenarioDAGListScenarioDAGDagList } from "./ListLhTaskFlowAndScenarioResponseBodyScenarioDaglistScenarioDagdagList";
import { ListLhTaskFlowAndScenarioResponseBodyScenarioDAGListScenarioDAGScenario } from "./ListLhTaskFlowAndScenarioResponseBodyScenarioDaglistScenarioDagscenario";


export class ListLhTaskFlowAndScenarioResponseBodyScenarioDAGListScenarioDAG extends $dara.Model {
  /**
   * @remarks
   * The list of task flows.
   */
  dagList?: ListLhTaskFlowAndScenarioResponseBodyScenarioDAGListScenarioDAGDagList;
  /**
   * @remarks
   * The information about the business scenario.
   */
  scenario?: ListLhTaskFlowAndScenarioResponseBodyScenarioDAGListScenarioDAGScenario;
  static names(): { [key: string]: string } {
    return {
      dagList: 'DagList',
      scenario: 'Scenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagList: ListLhTaskFlowAndScenarioResponseBodyScenarioDAGListScenarioDAGDagList,
      scenario: ListLhTaskFlowAndScenarioResponseBodyScenarioDAGListScenarioDAGScenario,
    };
  }

  validate() {
    if(this.dagList && typeof (this.dagList as any).validate === 'function') {
      (this.dagList as any).validate();
    }
    if(this.scenario && typeof (this.scenario as any).validate === 'function') {
      (this.scenario as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


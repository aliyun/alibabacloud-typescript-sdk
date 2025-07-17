// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLhTaskFlowAndScenarioResponseBodyRawDAGListDag extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the task flow can be modified. Valid values:
   * 
   * *   **true**: The task flow can be modified.
   * *   **false**: The task flow cannot be modified.
   * 
   * @example
   * true
   */
  canEdit?: boolean;
  /**
   * @remarks
   * The ID of the user who creates the task flow.
   * 
   * @example
   * 51****
   */
  creatorId?: string;
  /**
   * @remarks
   * The name of the user who creates the workspace.
   * 
   * @example
   * Creator_Name
   */
  creatorNickName?: string;
  /**
   * @remarks
   * The name of the task flow.
   * 
   * @example
   * Dag_Name
   */
  dagName?: string;
  /**
   * @remarks
   * The user ID of the task flow owner.
   * 
   * @example
   * 51****
   */
  dagOwnerId?: string;
  /**
   * @remarks
   * The name of the task flow owner.
   * 
   * @example
   * Owner_Name
   */
  dagOwnerNickName?: string;
  /**
   * @remarks
   * The extended field. No meaning is specified for this field.
   * 
   * @example
   * -
   */
  dataFlowId?: number;
  /**
   * @remarks
   * The extended field. No meaning is specified for this field.
   * 
   * @example
   * -
   */
  demoId?: string;
  /**
   * @remarks
   * The ID of the latest deployment record.
   * 
   * @example
   * 12**
   */
  deployId?: number;
  /**
   * @remarks
   * The ID of the task flow.
   * 
   * @example
   * 134137****
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the task flow is deleted. Valid values:
   * 
   * *   **true**: deleted
   * *   **false**: not deleted
   * 
   * @example
   * false
   */
  isDeleted?: boolean;
  /**
   * @remarks
   * The status of the latest execution. Valid values:
   * 
   * *   **0**: invalid
   * *   **1**: scheduling disabled
   * *   **2**: waiting to be scheduled
   * 
   * @example
   * 0
   */
  latestInstanceStatus?: number;
  /**
   * @remarks
   * The time when the latest execution record was generated.
   * 
   * @example
   * 2022-04-14
   */
  latestInstanceTime?: number;
  /**
   * @remarks
   * The ID of the business scenario.
   * 
   * @example
   * 2**
   */
  scenarioId?: number;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 1
   */
  spaceId?: number;
  /**
   * @remarks
   * The status of the task flow. Valid values:
   * 
   * *   **0**: invalid
   * *   **1**: scheduling disabled
   * *   **2**: waiting to be scheduled
   * 
   * @example
   * 2
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      canEdit: 'CanEdit',
      creatorId: 'CreatorId',
      creatorNickName: 'CreatorNickName',
      dagName: 'DagName',
      dagOwnerId: 'DagOwnerId',
      dagOwnerNickName: 'DagOwnerNickName',
      dataFlowId: 'DataFlowId',
      demoId: 'DemoId',
      deployId: 'DeployId',
      id: 'Id',
      isDeleted: 'IsDeleted',
      latestInstanceStatus: 'LatestInstanceStatus',
      latestInstanceTime: 'LatestInstanceTime',
      scenarioId: 'ScenarioId',
      spaceId: 'SpaceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canEdit: 'boolean',
      creatorId: 'string',
      creatorNickName: 'string',
      dagName: 'string',
      dagOwnerId: 'string',
      dagOwnerNickName: 'string',
      dataFlowId: 'number',
      demoId: 'string',
      deployId: 'number',
      id: 'number',
      isDeleted: 'boolean',
      latestInstanceStatus: 'number',
      latestInstanceTime: 'number',
      scenarioId: 'number',
      spaceId: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListLhTaskFlowAndScenarioResponseBodyScenarioDAGListScenarioDAGDagListDag extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the task flow can be modified. Valid values:
   * 
   * - **true**: The task flow can be modified.
   * - **false**: The task flow cannot be modified.
   * 
   * @example
   * true
   */
  canEdit?: boolean;
  /**
   * @remarks
   * The ID of the user who creates the task flow.
   * 
   * @example
   * 51****
   */
  creatorId?: string;
  /**
   * @remarks
   * The name of the user who creates the workspace.
   * 
   * @example
   * Creator_Name
   */
  creatorNickName?: string;
  /**
   * @remarks
   * The name of the task flow.
   * 
   * @example
   * Dag_Name
   */
  dagName?: string;
  /**
   * @remarks
   * The user ID of the task flow owner.
   * 
   * @example
   * 51****
   */
  dagOwnerId?: string;
  /**
   * @remarks
   * The name of the task flow owner.
   * 
   * @example
   * Owner_Name
   */
  dagOwnerNickName?: string;
  /**
   * @remarks
   * The extended field. No meaning is specified for this field.
   * 
   * @example
   * -
   */
  dataFlowId?: number;
  /**
   * @remarks
   * The extended field. No meaning is specified for this field.
   * 
   * @example
   * -
   */
  demoId?: string;
  /**
   * @remarks
   * The ID of the latest deployment record.
   * 
   * @example
   * 12**
   */
  deployId?: number;
  /**
   * @remarks
   * The ID of the task flow.
   * 
   * @example
   * 9***
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the task flow is deleted. Valid values:
   * 
   * - **true**: deleted
   * - **false**: not deleted
   * 
   * @example
   * false
   */
  isDeleted?: boolean;
  /**
   * @remarks
   * The status of the latest execution. Valid values:
   * 
   * - 0: invalid
   * - 1: scheduling disabled
   * - 2: waiting to be scheduled
   * 
   * @example
   * 1
   */
  latestInstanceStatus?: number;
  /**
   * @remarks
   * The time when the latest execution record was generated.
   * 
   * @example
   * 2022-04-14
   */
  latestInstanceTime?: number;
  /**
   * @remarks
   * The ID of the business scenario.
   * 
   * @example
   * 2**
   */
  scenarioId?: number;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 1
   */
  spaceId?: number;
  /**
   * @remarks
   * The status of the task flow. Valid values:
   * 
   * - **0**: invalid
   * - **1**: scheduling disabled
   * - **2**: waiting to be scheduled
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      canEdit: 'CanEdit',
      creatorId: 'CreatorId',
      creatorNickName: 'CreatorNickName',
      dagName: 'DagName',
      dagOwnerId: 'DagOwnerId',
      dagOwnerNickName: 'DagOwnerNickName',
      dataFlowId: 'DataFlowId',
      demoId: 'DemoId',
      deployId: 'DeployId',
      id: 'Id',
      isDeleted: 'IsDeleted',
      latestInstanceStatus: 'LatestInstanceStatus',
      latestInstanceTime: 'LatestInstanceTime',
      scenarioId: 'ScenarioId',
      spaceId: 'SpaceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canEdit: 'boolean',
      creatorId: 'string',
      creatorNickName: 'string',
      dagName: 'string',
      dagOwnerId: 'string',
      dagOwnerNickName: 'string',
      dataFlowId: 'number',
      demoId: 'string',
      deployId: 'number',
      id: 'number',
      isDeleted: 'boolean',
      latestInstanceStatus: 'number',
      latestInstanceTime: 'number',
      scenarioId: 'number',
      spaceId: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListLhTaskFlowAndScenarioResponseBodyScenarioDAGListScenarioDAGScenario extends $dara.Model {
  /**
   * @remarks
   * The ID of the user who creates the business scenario.
   * 
   * @example
   * 51****
   */
  creatorId?: string;
  /**
   * @remarks
   * The description of the business scenario.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the business scenario.
   * 
   * @example
   * Scenario_2
   */
  scenarioName?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      description: 'Description',
      scenarioName: 'ScenarioName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      description: 'string',
      scenarioName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListLhTaskFlowAndScenarioResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The task flows in the default business scenario.
   */
  rawDAGList?: ListLhTaskFlowAndScenarioResponseBodyRawDAGList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 48602B78-0DDF-414C-8688-70CAB6070115
   */
  requestId?: string;
  /**
   * @remarks
   * The task flows in other business scenarios.
   */
  scenarioDAGList?: ListLhTaskFlowAndScenarioResponseBodyScenarioDAGList;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      rawDAGList: 'RawDAGList',
      requestId: 'RequestId',
      scenarioDAGList: 'ScenarioDAGList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      rawDAGList: ListLhTaskFlowAndScenarioResponseBodyRawDAGList,
      requestId: 'string',
      scenarioDAGList: ListLhTaskFlowAndScenarioResponseBodyScenarioDAGList,
      success: 'boolean',
    };
  }

  validate() {
    if(this.rawDAGList && typeof (this.rawDAGList as any).validate === 'function') {
      (this.rawDAGList as any).validate();
    }
    if(this.scenarioDAGList && typeof (this.scenarioDAGList as any).validate === 'function') {
      (this.scenarioDAGList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


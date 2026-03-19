// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLhTaskFlowAndScenarioResponseBodyRawDAGListDag extends $dara.Model {
  canEdit?: boolean;
  creatorId?: string;
  creatorNickName?: string;
  dagName?: string;
  dagOwnerId?: string;
  dagOwnerNickName?: string;
  dataFlowId?: number;
  demoId?: string;
  deployId?: number;
  id?: number;
  isDeleted?: boolean;
  latestInstanceStatus?: number;
  latestInstanceTime?: number;
  scenarioId?: number;
  spaceId?: number;
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
  canEdit?: boolean;
  creatorId?: string;
  creatorNickName?: string;
  dagName?: string;
  dagOwnerId?: string;
  dagOwnerNickName?: string;
  dataFlowId?: number;
  demoId?: string;
  deployId?: number;
  id?: number;
  isDeleted?: boolean;
  latestInstanceStatus?: number;
  latestInstanceTime?: number;
  scenarioId?: number;
  spaceId?: number;
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
  creatorId?: string;
  description?: string;
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
  dagList?: ListLhTaskFlowAndScenarioResponseBodyScenarioDAGListScenarioDAGDagList;
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
  rawDAGList?: ListLhTaskFlowAndScenarioResponseBodyRawDAGList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 48602B78-0DDF-414C-8688-70CAB6070115
   */
  requestId?: string;
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


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


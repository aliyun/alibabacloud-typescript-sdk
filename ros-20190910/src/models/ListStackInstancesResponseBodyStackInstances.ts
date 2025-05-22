// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStackInstancesResponseBodyStackInstances extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination account to which the stack belongs.
   * 
   * @example
   * 156552876021****
   */
  accountId?: string;
  /**
   * @remarks
   * The time when the last successful drift detection was performed on the stack.
   * 
   * > This parameter is returned only if drift detection is performed on the stack group.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The ID of the folder in the resource directory.
   * 
   * > This parameter is returned only if the stack group is granted service-managed permissions.
   * 
   * @example
   * fd-4PvlVLOL8v
   */
  rdFolderId?: string;
  /**
   * @remarks
   * The region ID of the stack.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The state of the stack when the last successful drift detection was performed on the stack group.
   * 
   * Valid values:
   * 
   * *   DRIFTED: The stack has drifted.
   * *   NOT_CHECKED: No successful drift detection is performed on the stack.
   * *   IN_SYNC: The stack is being synchronized.
   * 
   * > This parameter is returned only if drift detection is performed on the stack group.
   * 
   * @example
   * IN_SYNC
   */
  stackDriftStatus?: string;
  /**
   * @remarks
   * The ID of the stack group.
   * 
   * @example
   * fd0ddef9-9540-4b42-a464-94f77835****
   */
  stackGroupId?: string;
  /**
   * @remarks
   * The name of the stack group.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * > This parameter is returned only if the stack is in the CURRENT state.
   * 
   * @example
   * 35ad60e3-6a92-42d8-8812-f0700d45****
   */
  stackId?: string;
  /**
   * @remarks
   * The state of the stack.
   * 
   * Valid values:
   * 
   * *   CURRENT: The stack is up-to-date with the stack group.
   * 
   * *   OUTDATED: The stack is not up-to-date with the stack group. Stacks are in the OUTDATED state due to the following possible reasons:
   * 
   *     *   When the CreateStackInstances operation is called to create stacks, the stacks fail to be created.
   *     *   When the UpdateStackInstances or UpdateStackGroup operation is called to update stacks, the stacks fail to be updated, or only specific stacks are updated.
   *     *   The creation or update operation is not complete.
   * 
   * @example
   * CURRENT
   */
  status?: string;
  /**
   * @remarks
   * The reason why the stack instance is in the OUTDATED state.
   * 
   * > This parameter is returned only if the stack instance is in the OUTDATED state.
   * 
   * @example
   * User initiated stop
   */
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      driftDetectionTime: 'DriftDetectionTime',
      rdFolderId: 'RdFolderId',
      regionId: 'RegionId',
      stackDriftStatus: 'StackDriftStatus',
      stackGroupId: 'StackGroupId',
      stackGroupName: 'StackGroupName',
      stackId: 'StackId',
      status: 'Status',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      driftDetectionTime: 'string',
      rdFolderId: 'string',
      regionId: 'string',
      stackDriftStatus: 'string',
      stackGroupId: 'string',
      stackGroupName: 'string',
      stackId: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


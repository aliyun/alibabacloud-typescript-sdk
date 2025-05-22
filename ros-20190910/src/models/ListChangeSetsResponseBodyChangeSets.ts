// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListChangeSetsResponseBodyChangeSetsTags } from "./ListChangeSetsResponseBodyChangeSetsTags";


export class ListChangeSetsResponseBodyChangeSets extends $dara.Model {
  /**
   * @remarks
   * The ID of the change set.
   * 
   * @example
   * 1f6521a4-05af-4975-afe9-bc4b45ad****
   */
  changeSetId?: string;
  /**
   * @remarks
   * The name of the change set.
   * 
   * @example
   * MyChangeSet
   */
  changeSetName?: string;
  /**
   * @remarks
   * The type of the change set.
   * 
   * @example
   * UPDATE
   */
  changeSetType?: string;
  /**
   * @remarks
   * The time when the change set was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2019-08-01T05:16:31
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the change set.
   * 
   * @example
   * It is a demo.
   */
  description?: string;
  /**
   * @remarks
   * The execution status of the change set.
   * 
   * @example
   * AVAILABLE
   */
  executionStatus?: string;
  /**
   * @remarks
   * The region ID of the change set.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the stack with which the change set is associated.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The name of the stack with which the change set is associated.
   * 
   * @example
   * MyStack
   */
  stackName?: string;
  /**
   * @remarks
   * The status of the change set.
   * 
   * @example
   * CREATE_COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The reason why the change set is in its current state.
   * 
   * @example
   * too many changes
   */
  statusReason?: string;
  tags?: ListChangeSetsResponseBodyChangeSetsTags[];
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      changeSetName: 'ChangeSetName',
      changeSetType: 'ChangeSetType',
      createTime: 'CreateTime',
      description: 'Description',
      executionStatus: 'ExecutionStatus',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      stackId: 'StackId',
      stackName: 'StackName',
      status: 'Status',
      statusReason: 'StatusReason',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      changeSetName: 'string',
      changeSetType: 'string',
      createTime: 'string',
      description: 'string',
      executionStatus: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      stackId: 'string',
      stackName: 'string',
      status: 'string',
      statusReason: 'string',
      tags: { 'type': 'array', 'itemType': ListChangeSetsResponseBodyChangeSetsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


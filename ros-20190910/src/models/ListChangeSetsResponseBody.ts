// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChangeSetsResponseBodyChangeSetsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
   * The type of the change set. Valid values: CREATE, UPDATE, and DELETE.
   * 
   * @example
   * UPDATE
   */
  changeSetType?: string;
  /**
   * @remarks
   * The time when the change set was created. The time is displayed in UTC+0 based on the ISO 8601 standard without the Z suffix. Format: YYYY-MM-DDThh:mm:ss.
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
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.  
   * For more information about resource groups, see [What is a resource group?](https://help.aliyun.com/document_detail/94475.html).
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the stack to which the change set belongs.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The name of the stack to which the change set belongs.
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
   * The reason why the change set is in its current status.
   * 
   * @example
   * too many changes
   */
  statusReason?: string;
  /**
   * @remarks
   * The tags of the change set.
   */
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

export class ListChangeSetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The change sets.
   */
  changeSets?: ListChangeSetsResponseBodyChangeSets[];
  /**
   * @remarks
   * The page number in paging query. The value is an integer with a minimum value of 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in paging query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of change sets returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      changeSets: 'ChangeSets',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSets: { 'type': 'array', 'itemType': ListChangeSetsResponseBodyChangeSets },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.changeSets)) {
      $dara.Model.validateArray(this.changeSets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


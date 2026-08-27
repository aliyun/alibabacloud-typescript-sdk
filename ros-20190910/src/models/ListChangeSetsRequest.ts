// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChangeSetsRequest extends $dara.Model {
  /**
   * @remarks
   * The change set ID. If you do not need detailed information about the change set, you can use this parameter instead of calling the GetChangeSet operation.
   * 
   * @example
   * 1f6521a4-05af-4975-afe9-bc4b45ad****
   */
  changeSetId?: string;
  /**
   * @remarks
   * The name of the change set. Maximum value of N: 5. You can use the wildcard character asterisk (\\*) for fuzzy match.
   * 
   * @example
   * MyChangeSet
   */
  changeSetName?: string[];
  /**
   * @remarks
   * The execution status of the change set. Maximum value of N: 5. Valid values:
   * - UNAVAILABLE
   * - AVAILABLE
   * - EXECUTE_IN_PROGRESS
   * - EXECUTE_COMPLETE
   * - EXECUTE_FAILED
   * - OBSOLETE.
   * 
   * @example
   * AVAILABLE
   */
  executionStatus?: string[];
  /**
   * @remarks
   * The page number of the change set list.  
   * Minimum value: 1.  
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in paging query. The value must be an integer.
   * Valid values: 1 to 50.
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the change set. You can call [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The status of the change set. Maximum value of N: 5. Valid values:
   * - CREATE_PENDING
   * - CREATE_IN_PROGRESS
   * - CREATE_COMPLETE
   * - CREATE_FAILED
   * - DELETE_FAILED
   * - DELETE_COMPLETE.
   * 
   * @example
   * CREATE_COMPLETE
   */
  status?: string[];
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      changeSetName: 'ChangeSetName',
      executionStatus: 'ExecutionStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      stackId: 'StackId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      changeSetName: { 'type': 'array', 'itemType': 'string' },
      executionStatus: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      stackId: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.changeSetName)) {
      $dara.Model.validateArray(this.changeSetName);
    }
    if(Array.isArray(this.executionStatus)) {
      $dara.Model.validateArray(this.executionStatus);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


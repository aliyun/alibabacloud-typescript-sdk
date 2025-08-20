// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStacksRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N.\\
   * Valid values of N: 1 to 20.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.\\
   * Valid values of N: 1 to 20.
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

export class ListStacksRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range during which data was queried. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-04-01T15:16:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the parent stack.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  parentStackId?: string;
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.\\
   * For more information about resource groups, see the "Resource Group" section of the [What is Resource Management?](https://help.aliyun.com/document_detail/94475.html) topic.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to return nested stacks. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * > If you specify ParentStackId, you must set ShowNestedStack to true.
   * 
   * @example
   * true
   */
  showNestedStack?: boolean;
  /**
   * @remarks
   * The stack ID. You can specify this parameter to query only the stack ID. If you want to query the detailed information about the stack, call the GetStack operation.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The IDs of the stacks.
   */
  stackIds?: string[];
  /**
   * @remarks
   * The names of the stacks.
   * 
   * @example
   * MyStack
   */
  stackName?: string[];
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2023-04-01T15:10:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the stack.
   * 
   * @example
   * CREATE_COMPLETE
   */
  status?: string[];
  /**
   * @remarks
   * The tags of the stack.
   */
  tag?: ListStacksRequestTag[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentStackId: 'ParentStackId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      showNestedStack: 'ShowNestedStack',
      stackId: 'StackId',
      stackIds: 'StackIds',
      stackName: 'StackName',
      startTime: 'StartTime',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentStackId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      showNestedStack: 'boolean',
      stackId: 'string',
      stackIds: { 'type': 'array', 'itemType': 'string' },
      stackName: { 'type': 'array', 'itemType': 'string' },
      startTime: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListStacksRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.stackIds)) {
      $dara.Model.validateArray(this.stackIds);
    }
    if(Array.isArray(this.stackName)) {
      $dara.Model.validateArray(this.stackName);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


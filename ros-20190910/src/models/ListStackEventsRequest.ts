// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStackEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The logical IDs of the resources.
   * 
   * @example
   * WebServer
   */
  logicalResourceId?: string[];
  /**
   * @remarks
   * The number of the page to return.\\
   * Pages start from page 1.\\
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.\\
   * Maximum value: 50.\\
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * The resource types.
   * 
   * @example
   * ALIYUN::ECS::Instance
   */
  resourceType?: string[];
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
   * The status of the resource.
   * 
   * @example
   * CREATE_IN_PROGRESS
   */
  status?: string[];
  static names(): { [key: string]: string } {
    return {
      logicalResourceId: 'LogicalResourceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      stackId: 'StackId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalResourceId: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceType: { 'type': 'array', 'itemType': 'string' },
      stackId: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.logicalResourceId)) {
      $dara.Model.validateArray(this.logicalResourceId);
    }
    if(Array.isArray(this.resourceType)) {
      $dara.Model.validateArray(this.resourceType);
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


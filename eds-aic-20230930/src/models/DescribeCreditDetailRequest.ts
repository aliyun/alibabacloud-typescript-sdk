// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCreditDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The list of agent types. This parameter is used to filter credit change details by agent type.
   */
  agentTypes?: string[];
  /**
   * @remarks
   * The end time. The time is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1782906240000
   */
  endTime?: number;
  /**
   * @remarks
   * The list of instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The maximum number of entries to return for this request.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. If a query does not return all results, the returned NextToken is not empty. You can pass the returned NextToken in the next query to continue the query.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of package IDs.
   */
  packageIds?: string[];
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The start time. The time is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1782819840000
   */
  startTime?: number;
  /**
   * @remarks
   * The list of task IDs. This parameter is used to filter credit details by task.
   */
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      agentTypes: 'AgentTypes',
      endTime: 'EndTime',
      instanceIds: 'InstanceIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      packageIds: 'PackageIds',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentTypes: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      packageIds: { 'type': 'array', 'itemType': 'string' },
      pageNum: 'string',
      pageSize: 'string',
      startTime: 'number',
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.agentTypes)) {
      $dara.Model.validateArray(this.agentTypes);
    }
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.packageIds)) {
      $dara.Model.validateArray(this.packageIds);
    }
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


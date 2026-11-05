// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the period.
   * 
   * @example
   * 2026-03-28T02:06:00Z
   */
  endTime?: number;
  /**
   * @remarks
   * The list of group resource types.
   */
  groupResourceTypes?: string[];
  /**
   * @remarks
   * The group type.
   * 
   * This parameter is required.
   * 
   * @example
   * DEFAULT
   */
  groupType?: string;
  /**
   * @remarks
   * The Lingxiao instance ID.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token. Leave this parameter empty for the first request. For subsequent requests, use the `nextToken` value returned in the previous response.
   * 
   * @example
   * eyJvZmZzZXQiOjIwfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of resource IDs.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The start time of the period.
   * 
   * @example
   * 2026-03-25 10:26:44
   */
  startTime?: number;
  /**
   * @remarks
   * The list of states.
   */
  states?: string[];
  /**
   * @remarks
   * The effective period used for the query.
   * 
   * @example
   * true/false
   */
  timeUsingPeriod?: boolean;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      groupResourceTypes: 'GroupResourceTypes',
      groupType: 'GroupType',
      instanceIds: 'InstanceIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceIds: 'ResourceIds',
      startTime: 'StartTime',
      states: 'States',
      timeUsingPeriod: 'TimeUsingPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      groupResourceTypes: { 'type': 'array', 'itemType': 'string' },
      groupType: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'string',
      nextToken: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
      states: { 'type': 'array', 'itemType': 'string' },
      timeUsingPeriod: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.groupResourceTypes)) {
      $dara.Model.validateArray(this.groupResourceTypes);
    }
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    if(Array.isArray(this.states)) {
      $dara.Model.validateArray(this.states);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


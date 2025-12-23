// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowInstancesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @example
   * workflow_instance_name
   */
  name?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  scheduleTime?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * w-3q9jo749ne5****
   */
  workflowId?: string;
  /**
   * @example
   * wi-3q9jo749ne5****
   */
  workflowInstanceId?: string;
  /**
   * @example
   * 1
   */
  workflowVersion?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      name: 'name',
      scheduleTime: 'scheduleTime',
      startTime: 'startTime',
      status: 'status',
      workflowId: 'workflowId',
      workflowInstanceId: 'workflowInstanceId',
      workflowVersion: 'workflowVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      name: 'string',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'string',
      workflowId: 'string',
      workflowInstanceId: 'string',
      workflowVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstancesResponseBody extends $dara.Model {
  data?: ListWorkflowInstancesResponseBodyData[];
  /**
   * @example
   * 123abc***
   */
  nextToken?: string;
  /**
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListWorkflowInstancesResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


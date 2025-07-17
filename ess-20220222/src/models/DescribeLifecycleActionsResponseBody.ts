// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLifecycleActionsResponseBodyLifecycleActions extends $dara.Model {
  /**
   * @remarks
   * The IDs of the ECS instances on which the lifecycle hook takes effect
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The subsequent action that Auto Scaling performs after the lifecycle hook times out. Valid values:
   * 
   * *   CONTINUE: Auto Scaling continues to respond to a scale-in or scale-out request.
   * *   ABANDON: Auto Scaling releases ECS instances that are created during scale-out events, or removes ECS instances from the scaling group during scale-in events.
   * 
   * @example
   * CONTINUE
   */
  lifecycleActionResult?: string;
  /**
   * @remarks
   * The status of the lifecycle hook action.
   * 
   * @example
   * Pending
   */
  lifecycleActionStatus?: string;
  /**
   * @remarks
   * The token of the lifecycle hook action.
   * 
   * @example
   * 9C2E9DA7-F794-449A-ACF6-CEE24444F7BB
   */
  lifecycleActionToken?: string;
  /**
   * @remarks
   * The ID of the lifecycle hook.
   * 
   * @example
   * ash-bp18uoft0deax0f7****
   */
  lifecycleHookId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      lifecycleActionResult: 'LifecycleActionResult',
      lifecycleActionStatus: 'LifecycleActionStatus',
      lifecycleActionToken: 'LifecycleActionToken',
      lifecycleHookId: 'LifecycleHookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      lifecycleActionResult: 'string',
      lifecycleActionStatus: 'string',
      lifecycleActionToken: 'string',
      lifecycleHookId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecycleActionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The actions of the lifecycle hook.
   */
  lifecycleActions?: DescribeLifecycleActionsResponseBodyLifecycleActions[];
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 3
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token returned in this call.
   * 
   * @example
   * AAAAAcSz4VTb1Nq****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 42A742EB-FCF3-459E-9C62-E107048C17E3
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the queried lifecycle actions.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      lifecycleActions: 'LifecycleActions',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecycleActions: { 'type': 'array', 'itemType': DescribeLifecycleActionsResponseBodyLifecycleActions },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.lifecycleActions)) {
      $dara.Model.validateArray(this.lifecycleActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


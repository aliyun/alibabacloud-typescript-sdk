// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLifecycleActionsResponseBodyLifecycleActions } from "./DescribeLifecycleActionsResponseBodyLifecycleActions";


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


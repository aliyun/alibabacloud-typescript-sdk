// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSnapshotsRequest extends $dara.Model {
  /**
   * @remarks
   * The end completion time. A UNIX timestamp, in seconds. Only backup points with a completion time earlier than this value are returned.
   * 
   * @example
   * 1776059382
   */
  completeTimeEnd?: number;
  /**
   * @remarks
   * The start completion time. A UNIX timestamp, in seconds. Only backup points with a completion time greater than or equal to this value are returned.
   * 
   * @example
   * 1776059082
   */
  completeTimeStart?: number;
  /**
   * @remarks
   * The maximum number of results to return in a paged query. Default value: 10. The value must be greater than 1.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. You do not need to specify this parameter for the first request. For subsequent pages, pass in the **NextToken** value returned from the previous request. An empty **NextToken** indicates that no more pages are available. This parameter cannot be used together with **Skip**.
   * 
   * @example
   * eyJJbmRleCI6NjUwMX0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The backup plan ID. This is an optional filter condition. If specified, only backup points under the specified backup plan are returned.
   * 
   * @example
   * po-0000****123
   */
  planId?: string;
  /**
   * @remarks
   * The ID of the protected resource. The protected resource must exist, and its data source type must match the **SourceType** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * pr-123***7890
   */
  protectedResourceId?: string;
  /**
   * @remarks
   * The number of entries to skip. The value must be a non-negative integer and a multiple of **MaxResults**. This parameter cannot be used together with **NextToken**.
   * 
   * @example
   * 0
   */
  skip?: number;
  /**
   * @remarks
   * The data source type. The value must match the data source type of the protected resource (ProtectedResourceId). The supported data source types are listed in the valid values.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * The vault ID. This is an optional filter condition. If specified, only backup points in the specified vault are returned.
   * 
   * @example
   * v-00030j3c******sn
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      completeTimeEnd: 'CompleteTimeEnd',
      completeTimeStart: 'CompleteTimeStart',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      planId: 'PlanId',
      protectedResourceId: 'ProtectedResourceId',
      skip: 'Skip',
      sourceType: 'SourceType',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTimeEnd: 'number',
      completeTimeStart: 'number',
      maxResults: 'number',
      nextToken: 'string',
      planId: 'string',
      protectedResourceId: 'string',
      skip: 'number',
      sourceType: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


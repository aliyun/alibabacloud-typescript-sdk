// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMyRelatedApprovalsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The permissions.
   */
  accessTypesShrink?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The end of the application time range, specified as a millisecond timestamp.
   * 
   * @example
   * 1779724799999
   */
  endTime?: number;
  /**
   * @remarks
   * Filters approvals by the specified principal.
   */
  granteeShrink?: string;
  /**
   * @remarks
   * The pagination token that acts as a cursor to retrieve the next page of results.
   * 
   * @example
   * eyJpZCI6MTIzfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10. Maximum value: 200.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource declaration.
   */
  resourceShrink?: string;
  /**
   * @remarks
   * The resource type, specified as a leaf node name. Multiple values are supported because a single business semantic can be mapped to multiple leaf node names.
   * 
   * This parameter is required.
   * 
   * @example
   * ["table", "column"]
   */
  resourceTypeShrink?: string;
  /**
   * @remarks
   * The start of the application time range, specified as a millisecond timestamp.
   * 
   * @example
   * 1771948800000
   */
  startTime?: number;
  /**
   * @remarks
   * Filters the results by approval status. Valid values:
   * 
   * - `WaitApproval`: Pending approval
   * 
   * - `Confirmed`: Pending authorization
   * 
   * - `RejectApproval`: Approval rejected
   * 
   * - `AuthorizeSucceed`: Authorization succeeded
   * 
   * - `AuthorizeFailed`: Authorization failed
   * 
   * - `Deleted`: Deleted
   * 
   * - `Canceled`: Withdrawn
   * 
   * @example
   * WAIT_APPROVAL
   */
  statusesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      accessTypesShrink: 'AccessTypes',
      defSchema: 'DefSchema',
      endTime: 'EndTime',
      granteeShrink: 'Grantee',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      resourceShrink: 'Resource',
      resourceTypeShrink: 'ResourceType',
      startTime: 'StartTime',
      statusesShrink: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTypesShrink: 'string',
      defSchema: 'string',
      endTime: 'number',
      granteeShrink: 'string',
      nextToken: 'string',
      pageSize: 'number',
      resourceShrink: 'string',
      resourceTypeShrink: 'string',
      startTime: 'number',
      statusesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


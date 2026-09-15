// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMaintainWindowsRequest extends $dara.Model {
  /**
   * @remarks
   * The sort direction. Valid values:
   * 
   * - **asc**: ascending order.
   * - **desc**: descending order (default).
   * 
   * @example
   * desc
   */
  direction?: string;
  /**
   * @remarks
   * Filters results by enabled status. Valid values:
   * 
   * - **true**: Returns only enabled silence policies.
   * - **false**: Returns only paused silence policies.
   * 
   * If you do not specify this parameter, results are not filtered by enabled status.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The ID of the silence policy. Exact match is used. If you do not specify this parameter, results are not filtered by ID.
   * 
   * @example
   * 3ff3fbd0-8a0b-4b31-9b1c-8e3f0a2c5d71
   */
  maintainWindowId?: string;
  /**
   * @remarks
   * Policy Name of the silence policy. Fuzzy match is used (a match occurs if Policy Name contains the specified value). If you do not specify this parameter, results are not filtered by name.
   * 
   * @example
   * silence-for-release
   */
  maintainWindowName?: string;
  /**
   * @remarks
   * The maximum number of records to return in this request. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. You do not need to specify this parameter for the first query. For subsequent queries, set this parameter to the non-empty nextToken value returned in the previous response. This value does not guarantee that the next page contains data.
   * 
   * @example
   * Y21zRXZlbnRCYXNlUGFnZT0x
   */
  nextToken?: string;
  /**
   * @remarks
   * The field by which to sort results. Default value: createTime. Valid values:
   * 
   * - **createTime**: creation time.
   * - **updateTime**: update time.
   * - **enable**: enabled status.
   * 
   * If you specify any other value, results are sorted by creation time.
   * 
   * @example
   * createTime
   */
  orderBy?: string;
  /**
   * @remarks
   * The workspace name. This parameter is required by the backend and is used to isolate silence policy resources across different business workspaces.
   * 
   * @example
   * default-cms-xxxx-cn-hangzhou
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      enable: 'enable',
      maintainWindowId: 'maintainWindowId',
      maintainWindowName: 'maintainWindowName',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      orderBy: 'orderBy',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      enable: 'boolean',
      maintainWindowId: 'string',
      maintainWindowName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


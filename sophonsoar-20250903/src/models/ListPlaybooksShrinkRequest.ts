// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPlaybooksShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Language type for request and response messages.
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Maximum number of results returned in a single request. Range: 1~100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for the next query start.
   * 
   * @example
   * 7fbb1c****07c1f79a740f039a8dcfda
   */
  nextToken?: string;
  /**
   * @remarks
   * Sorting logic, default is **desc**, with values as follows:
   * - **desc**: Descending order.
   * - **asc**: Ascending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * Sorting field. Values:
   * 
   * - **UpdateTime**: Sort by update time.
   * - **ExecutionTime**: Sort by the latest execution time.
   * 
   * @example
   * UpdateTime
   */
  orderField?: string;
  /**
   * @remarks
   * Page number for pagination, default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of items per page for pagination. Range: 1~100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * End time of the latest execution of the playbook.
   * 
   * @example
   * 1731379251000
   */
  playbookExecutionEndTime?: number;
  /**
   * @remarks
   * Start time of the latest execution of the playbook.
   * 
   * @example
   * 1731378251000
   */
  playbookExecutionStartTime?: number;
  /**
   * @remarks
   * Name of the playbook, supports fuzzy search.
   * 
   * @example
   * demo_test
   */
  playbookName?: string;
  /**
   * @remarks
   * Collection of input parameter types for the playbook.
   */
  playbookParamTypesShrink?: string;
  /**
   * @remarks
   * Publication status of the playbook, with values as follows:
   * 
   * - **0**: Unpublished.
   * - **1**: Published.
   * 
   * @example
   * 1
   */
  playbookStatus?: number;
  /**
   * @remarks
   * Type of the playbook, with values as follows:
   * 
   * - **preset**: Predefined playbook.
   * - **user**: Custom playbook.
   * - **component**: Security response component.
   * 
   * @example
   * preset
   */
  playbookType?: string;
  /**
   * @remarks
   * Collection of UUIDs of playbooks.
   */
  playbookUuidsShrink?: string;
  /**
   * @remarks
   * User ID for the administrator to switch to another member\\"s perspective.
   * 
   * @example
   * 13760*****718726
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      orderField: 'OrderField',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      playbookExecutionEndTime: 'PlaybookExecutionEndTime',
      playbookExecutionStartTime: 'PlaybookExecutionStartTime',
      playbookName: 'PlaybookName',
      playbookParamTypesShrink: 'PlaybookParamTypes',
      playbookStatus: 'PlaybookStatus',
      playbookType: 'PlaybookType',
      playbookUuidsShrink: 'PlaybookUuids',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      orderField: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      playbookExecutionEndTime: 'number',
      playbookExecutionStartTime: 'number',
      playbookName: 'string',
      playbookParamTypesShrink: 'string',
      playbookStatus: 'number',
      playbookType: 'string',
      playbookUuidsShrink: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


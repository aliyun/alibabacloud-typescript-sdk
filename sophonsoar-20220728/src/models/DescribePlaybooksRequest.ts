// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlaybooksRequest extends $dara.Model {
  /**
   * @remarks
   * Activation status of the playbook. Values:
   * 
   * - **1**: Indicates the playbook is activated.
   * - **0**: Indicates the playbook is not activated.
   * 
   * @example
   * 1
   */
  active?: number;
  /**
   * @remarks
   * End time for the query, in 13-digit timestamp format.
   * 
   * @example
   * 1683858064361
   */
  endMillis?: number;
  /**
   * @remarks
   * Specifies the language type for the request and response, default is **zh**. Values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the playbook.
   * 
   * @example
   * demo_playbook
   */
  name?: string;
  /**
   * @remarks
   * The sorting logic, with a default value of **desc**. Values:
   * - **desc**: Descending order.
   * - **asc**: Ascending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * Type of the playbook. Values:
   * 
   * - **preset**: Predefined playbook.
   * - **user**: Custom playbook.
   * 
   * @example
   * user
   */
  ownType?: string;
  /**
   * @remarks
   * Sets the page number from which to start displaying the query results. The default value is 1, indicating the first page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Specifies the maximum number of items to display per page in a paginated query. The default number of items per page is 20. If the PageSize parameter is empty, it will return 10 items by default.
   * > It is recommended that the PageSize value is not empty.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The trigger method for the playbook, with a default value of **query all**. Values:
   * - **template-incident**: Security incident.
   * - **template-ip**: IP entity.
   * - **template-file**: File entity.
   * - **template-process**: Process entity.
   * - **template-alert**: Security alert.
   * - **template-domain**: Domain entity.
   * - **template-container**: Container entity.
   * - **template-host**: Host entity.
   * - **template-custom**: Custom.
   * 
   * @example
   * template-alert
   */
  paramTypes?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * > You can use the UUID to query specific playbook information.
   * > - Call the [CreatePlaybook](~~CreatePlaybook~~) API to obtain this parameter.
   * 
   * @example
   * 8baa6cff-319e-4ede-97bc-1xxxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * UUID List of the playbook.
   * 
   * Note You can use the UUID list to query specific playbook information.
   * Call the DescribePlaybooks API to obtain this parameter.
   * 
   * @example
   * 8baa6cff-319e-4ede-97bc-1xxxxxx,7745e6cff-319e-4ede-97bc-1xxxxxx
   */
  playbookUuids?: string;
  /**
   * @remarks
   * The sorting basis, with a default value of **1**. Values:
   * - **1**: Last modified time.
   * - **2**: Most recent execution time.
   * 
   * @example
   * 1
   */
  sort?: number;
  /**
   * @remarks
   * Start time for the query, in 13-digit timestamp format.
   * 
   * @example
   * 1683526277415
   */
  startMillis?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      endMillis: 'EndMillis',
      lang: 'Lang',
      name: 'Name',
      order: 'Order',
      ownType: 'OwnType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paramTypes: 'ParamTypes',
      playbookUuid: 'PlaybookUuid',
      playbookUuids: 'PlaybookUuids',
      sort: 'Sort',
      startMillis: 'StartMillis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      endMillis: 'number',
      lang: 'string',
      name: 'string',
      order: 'string',
      ownType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paramTypes: 'string',
      playbookUuid: 'string',
      playbookUuids: 'string',
      sort: 'number',
      startMillis: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


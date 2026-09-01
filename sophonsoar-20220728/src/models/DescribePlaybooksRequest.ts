// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlaybooksRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the playbook. Valid values:
   * 
   * - **1**: The playbook is enabled.
   * 
   * - **0**: The playbook is disabled.
   * 
   * @example
   * 1
   */
  active?: number;
  /**
   * @remarks
   * The end of the time range to query. This value is a 13-digit timestamp.
   * 
   * @example
   * 1683858064361
   */
  endMillis?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese.
   * 
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
   * The sort order. Default value: **desc**. Valid values:
   * 
   * - **desc**: descending.
   * 
   * - **asc**: ascending.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The type of the playbook. Valid values:
   * 
   * - **preset**: predefined playbook.
   * 
   * - **user**: custom playbook.
   * 
   * @example
   * user
   */
  ownType?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. If you leave this parameter empty, 10 entries are returned by default.
   * 
   * > Specify a value for this parameter.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The trigger type of the playbook. If you do not specify this parameter, playbooks of all trigger types are queried. Valid values:
   * 
   * - **template-incident**: security event.
   * 
   * - **template-ip**: IP entity.
   * 
   * - **template-file**: file entity.
   * 
   * - **template-process**: process entity.
   * 
   * - **template-alert**: security alert.
   * 
   * - **template-domain**: domain name entity.
   * 
   * - **template-container**: container entity.
   * 
   * - **template-host**: host entity.
   * 
   * - **template-custom**: custom.
   * 
   * @example
   * template-alert
   */
  paramTypes?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * > Call the [CreatePlaybook](~~CreatePlaybook~~) operation to obtain this parameter.
   * 
   * @example
   * 8baa6cff-319e-4ede-97bc-1xxxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * A comma-separated list of playbook UUIDs. You can specify up to 100 UUIDs.
   * 
   * @example
   * 8baa6cff-319e-4ede-97bc-1xxxxxx,8rrt6cff-319e-4ede-97bc-1xxxxxx
   */
  playbookUuids?: string;
  /**
   * @remarks
   * The field to sort by. Default value: **1**. Valid values:
   * 
   * - **1**: last modification time.
   * 
   * - **2**: last running time.
   * 
   * @example
   * 1
   */
  sort?: number;
  /**
   * @remarks
   * The start of the time range to query. This value is a 13-digit timestamp.
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


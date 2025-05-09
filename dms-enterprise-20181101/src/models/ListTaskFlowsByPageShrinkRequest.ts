// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskFlowsByPageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Filter condition, task flow ID list.
   */
  dagIdListShrink?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Filter condition, application scenario ID.
   * 
   * @example
   * 12***
   */
  scenarioId?: number;
  /**
   * @remarks
   * The keyword that is used to search for task flow names.
   * 
   * @example
   * Test node
   */
  searchKey?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > : To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dagIdListShrink: 'DagIdList',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      scenarioId: 'ScenarioId',
      searchKey: 'SearchKey',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagIdListShrink: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      scenarioId: 'number',
      searchKey: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


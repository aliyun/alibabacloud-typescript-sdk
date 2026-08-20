// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserVisibleKnowledgeBaseContentsRequest extends $dara.Model {
  /**
   * @remarks
   * The directory ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dir_example
   */
  directoryId?: string;
  /**
   * @remarks
   * The search keyword. Supports fuzzy match on version names.
   * 
   * @example
   * Product description
   */
  keyword?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The field by which the results are sorted. Valid values:
   * 
   * - event_time: the event creation time.
   * - event_execute_start_time: the event execution time.
   * - event_execute_finish_time: the event completion time.
   * 
   * @example
   * name
   */
  sortField?: string;
  /**
   * @remarks
   * The sort order. This parameter takes effect when sortBy is specified. Valid values: ASC, DESC (case-insensitive).
   * 
   * @example
   * asc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The list of service source types.
   * 
   * @example
   * FILE,WEB_PAGE
   */
  sourceTypes?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. Pass it explicitly through --tenant-id in winnexo-cli.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'directoryId',
      keyword: 'keyword',
      page: 'page',
      pageSize: 'pageSize',
      sortField: 'sortField',
      sortOrder: 'sortOrder',
      sourceTypes: 'sourceTypes',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      keyword: 'string',
      page: 'number',
      pageSize: 'number',
      sortField: 'string',
      sortOrder: 'string',
      sourceTypes: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


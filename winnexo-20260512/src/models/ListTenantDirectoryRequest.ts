// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTenantDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100. Maximum value: 500.
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
   * The sort order. This parameter takes effect only when sortBy is specified. Valid values: ASC, DESC (case-insensitive).
   * 
   * @example
   * asc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The list of source types.
   * 
   * @example
   * string_value
   */
  sourceTypes?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'directoryId',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTenantDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * The directory ID.
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
   * The field by which to sort the returned results. Valid values:
   * 
   * - event_time: the time when the event was created.
   * - event_execute_start_time: the time when the event execution started.
   * - event_execute_finish_time: the time when the event execution finished.
   * 
   * @example
   * name
   */
  sortField?: string;
  /**
   * @remarks
   * The sort order. This parameter takes effect only when the sort field is specified. Valid values: ASC and DESC (case-insensitive).
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPersonalDirectoryContentsRequest extends $dara.Model {
  /**
   * @remarks
   * The directory ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The name of the digital employee.
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Pages start from page 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The field by which the results are sorted. Valid values:
   * 
   * - event_time: event creation time
   * - event_execute_start_time: event execution time
   * - event_execute_finish_time: event completion time
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
   * string_value
   */
  sourceTypes?: string[];
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
      operatingObjectName: 'operatingObjectName',
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
      operatingObjectName: 'string',
      page: 'number',
      pageSize: 'number',
      sortField: 'string',
      sortOrder: 'string',
      sourceTypes: { 'type': 'array', 'itemType': 'string' },
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceTypes)) {
      $dara.Model.validateArray(this.sourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


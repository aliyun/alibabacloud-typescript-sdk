// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeBaseDirectoriesRequest extends $dara.Model {
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
   * The sort order. This parameter takes effect only when sortBy is specified. Valid values: ASC, DESC (case-insensitive).
   * 
   * @example
   * asc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. You can pass it explicitly by using --tenant-id in winnexo-cli.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'directoryId',
      sortField: 'sortField',
      sortOrder: 'sortOrder',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      sortField: 'string',
      sortOrder: 'string',
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


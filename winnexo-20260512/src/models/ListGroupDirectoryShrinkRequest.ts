// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupDirectoryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of a visible directory within the space. If omitted or set to root, the internal root is queried. On the first query, the existing service initialization for the root directory is used.
   * 
   * @example
   * dir_example
   */
  directoryId?: string;
  /**
   * @remarks
   * The collaboration space ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  groupId?: string;
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort field within the group. Valid values: name, gmt_create, and gmt_modified. Directories are listed first.
   * 
   * @example
   * name
   */
  sortField?: string;
  /**
   * @remarks
   * The sort order within the group. Valid values: asc and desc. Directories are always listed first.
   * 
   * @example
   * asc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The resource status filter. Physical subdirectories are retained. Immediate reference directories are not returned when a status filter is set. This follows the existing behavior.
   * 
   * @example
   * READY
   */
  sourceStatus?: string;
  /**
   * @remarks
   * The array of resource types. If values are specified, only resources are returned. If the array is empty or omitted, no type-based filtering is applied, and the existing resource type filtering logic is used.
   * 
   * @example
   * ["TEXT"]
   */
  sourceTypesShrink?: string;
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
      groupId: 'groupId',
      page: 'page',
      pageSize: 'pageSize',
      sortField: 'sortField',
      sortOrder: 'sortOrder',
      sourceStatus: 'sourceStatus',
      sourceTypesShrink: 'sourceTypes',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      groupId: 'string',
      page: 'number',
      pageSize: 'number',
      sortField: 'string',
      sortOrder: 'string',
      sourceStatus: 'string',
      sourceTypesShrink: 'string',
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


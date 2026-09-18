// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupDirectoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of a visible directory in the current space. If this parameter is omitted or set to root, the space root is queried. The first query reuses the existing service-initialized internal root directory.
   * 
   * @example
   * dir_example
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the collaborative share.
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  groupId?: string;
  /**
   * @remarks
   * The sort field. Valid values: name, gmt_create, and gmt_modified.
   * 
   * @example
   * gmt_create
   */
  sortField?: string;
  /**
   * @remarks
   * The sort order. Valid values: asc and desc.
   * 
   * @example
   * desc
   */
  sortOrder?: string;
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
      sortField: 'sortField',
      sortOrder: 'sortOrder',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      groupId: 'string',
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


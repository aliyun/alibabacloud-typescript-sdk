// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace description.
   * 
   * @example
   * ProjectDescription
   */
  description?: string;
  /**
   * @remarks
   * The project group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  groupId?: string;
  /**
   * @remarks
   * The updated name of the filter view.
   * 
   * This parameter is required.
   * 
   * @example
   * ProjectFiles
   */
  name?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * dir_parent
   */
  parentDirectoryId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If this parameter is not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      groupId: 'groupId',
      name: 'name',
      parentDirectoryId: 'parentDirectoryId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      name: 'string',
      parentDirectoryId: 'string',
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


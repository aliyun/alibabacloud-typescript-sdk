// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGroupDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * The new description. If this parameter is set to an empty string, the description is cleared. If this parameter is omitted or set to null, the description remains unchanged. At least one of name or description must be non-null.
   * 
   * @example
   * Project description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the physical subfolder in the current space. The internal root folder and reference folders are not allowed.
   * 
   * This parameter is required.
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
   * The new name. If this parameter is omitted or set to null, the name remains unchanged.
   * 
   * @example
   * Project Materials
   */
  name?: string;
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
      directoryId: 'directoryId',
      groupId: 'groupId',
      name: 'name',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
      groupId: 'string',
      name: 'string',
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


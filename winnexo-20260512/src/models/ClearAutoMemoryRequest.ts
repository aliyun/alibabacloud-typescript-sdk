// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClearAutoMemoryRequest extends $dara.Model {
  /**
   * @remarks
   * The collaboration workspace ID. This parameter is required when ownerType is set to group.
   * 
   * @example
   * cg_12345
   */
  groupId?: string;
  /**
   * @remarks
   * The owner type. Valid values: user: the personal memory of the authenticated user; group: the memory of the specified collaboration workspace.
   * 
   * @example
   * group
   */
  ownerType?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10001
   */
  tenantId?: string;
  /**
   * @remarks
   * The memory type. Valid values: user, feedback, reference, project, or all. The value all does not clear manual memory.
   * 
   * This parameter is required.
   * 
   * @example
   * project
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      ownerType: 'ownerType',
      tenantId: 'tenantId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      ownerType: 'string',
      tenantId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


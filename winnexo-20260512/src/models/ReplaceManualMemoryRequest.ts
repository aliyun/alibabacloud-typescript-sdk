// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceManualMemoryRequest extends $dara.Model {
  /**
   * @remarks
   * The complete content of profile.md. An empty string indicates that the memory is cleared. This field is required, but an empty value is allowed.
   * 
   * This parameter is required.
   * 
   * @example
   * Prefers concise answers
   */
  content?: string;
  /**
   * @remarks
   * The workspace ID. This parameter is required when ownerType is set to group.
   * 
   * @example
   * cg_12345
   */
  groupId?: string;
  /**
   * @remarks
   * The owner type. A value of user indicates the personal memory of the authenticated user. A value of group indicates the memory of a specified workspace.
   * 
   * @example
   * group
   */
  ownerType?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If this parameter is not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10001
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      groupId: 'groupId',
      ownerType: 'ownerType',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      groupId: 'string',
      ownerType: 'string',
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


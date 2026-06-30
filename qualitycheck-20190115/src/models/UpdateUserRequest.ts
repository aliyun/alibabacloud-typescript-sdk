// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace ID.
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This API supports batch modification of user roles. The value of the \\`jsonStr\\` input parameter is a List type. Refer to the example value. See the detailed information below for the complete JSON string content.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"aliUid":"2951869706989****","roleName":"ADMIN"},{"aliUid":"2557461687048****","roleName":"ADMIN"}]
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


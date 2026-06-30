// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace ID
   * 
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * A complete **JSON string**. For details, see the table below.
   * 
   * @example
   * [{"aliUid":123,"roleName":"AGENT","userName":"kefu01"}]
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


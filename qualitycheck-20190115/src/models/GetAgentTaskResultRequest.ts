// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentTaskResultRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the business space.
   * 
   * @example
   * 123456
   */
  baseMeAgentId?: string;
  /**
   * @remarks
   * The complete JSON string. For more information, see the following details.
   * 
   * @example
   * {\\"vid\\":\\"sip-11-1766561862.293393\\",\\"taskId\\":\\"20251224-D3B32484-2D53-5B53-A618-483A7941029E\\"}
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
      baseMeAgentId: 'string',
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


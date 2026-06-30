// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevertAssignedSessionGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the baseMeAgent.
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * For more information, see the description of the request parameters.
   * 
   * @example
   * {"isSchemeData":1,"forceRevertSessionGroup":true,"sessionGroupIdList":["1"]}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
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


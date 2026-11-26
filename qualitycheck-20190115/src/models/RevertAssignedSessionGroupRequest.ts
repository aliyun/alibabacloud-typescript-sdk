// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevertAssignedSessionGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The business workspace ID.
   * 
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * For more information, see the supplementary description of request parameters.
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


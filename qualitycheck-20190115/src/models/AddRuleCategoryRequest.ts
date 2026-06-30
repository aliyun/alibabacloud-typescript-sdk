// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddRuleCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   * 
   * @example
   * 1232927
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * A JSON-formatted string. For details, see the following information.
   * 
   * This parameter is required.
   * 
   * @example
   * {"typeName":"规则类型A"}
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


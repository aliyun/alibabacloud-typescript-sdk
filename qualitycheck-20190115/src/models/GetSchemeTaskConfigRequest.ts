// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSchemeTaskConfigRequest extends $dara.Model {
  /**
   * @example
   * 12345
   */
  baseMeAgentId?: number;
  /**
   * @example
   * {"sourceDataType":3,"id":588}
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


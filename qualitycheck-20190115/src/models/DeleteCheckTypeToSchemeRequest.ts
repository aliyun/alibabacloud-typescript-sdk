// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCheckTypeToSchemeRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * A JSON string that contains the custom parameters for the operation. For more information, see the **jsonStr properties** section below.
   * 
   * @example
   * {"schemeId":"1376","checkType":"4"}
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


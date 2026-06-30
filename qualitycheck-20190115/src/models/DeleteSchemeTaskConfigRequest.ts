// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSchemeTaskConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace ID.
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * A JSON object that contains the request parameters. For more information, see the parameter details.
   * 
   * @example
   * {"schemeId":"329"}
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


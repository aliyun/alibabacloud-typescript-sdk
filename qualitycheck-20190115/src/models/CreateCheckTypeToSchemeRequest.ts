// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCheckTypeToSchemeRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace ID
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * Request parameter in JSON format. For details, see the additional information about request parameters.
   * 
   * @example
   * {"schemeId":"187","checkName":"质检维度名","sourceScore":20}
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


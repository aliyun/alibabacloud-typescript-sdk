// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCheckTypeToSchemeRequest extends $dara.Model {
  /**
   * @remarks
   * The baseMeAgentId.
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * Input parameter in JSON format. For more information, see the request parameters.
   * 
   * @example
   * {"schemeId":"187","checkName":"服务规范性检测2","sourceScore":20,"checkType":0}
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


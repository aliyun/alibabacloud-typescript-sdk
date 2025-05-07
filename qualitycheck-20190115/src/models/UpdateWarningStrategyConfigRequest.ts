// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWarningStrategyConfigRequest extends $dara.Model {
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
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


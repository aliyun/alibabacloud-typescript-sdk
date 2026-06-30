// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWarningConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace ID
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * Complete JSON string information. See the following details for specific content.
   * 
   * This parameter is required.
   * 
   * @example
   * {"ridList":[15670],"configName":"投诉预警","channels":[{"type":1,"url":"https://xxx"}]}
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


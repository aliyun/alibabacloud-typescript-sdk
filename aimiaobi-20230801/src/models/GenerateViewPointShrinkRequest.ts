// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateViewPointShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c160c841c8e54295bf2f441432785944_p_efm
   */
  agentKey?: string;
  referenceDataShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      referenceDataShrink: 'ReferenceData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      referenceDataShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


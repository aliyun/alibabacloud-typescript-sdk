// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocumentExtractionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  urlsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      urlsShrink: 'Urls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      urlsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


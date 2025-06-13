// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateExportWordTaskRequest extends $dara.Model {
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
   * 
   * @example
   * 1
   */
  generatedContentId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      generatedContentId: 'GeneratedContentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      generatedContentId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


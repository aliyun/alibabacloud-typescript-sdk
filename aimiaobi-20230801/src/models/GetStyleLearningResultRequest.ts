// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStyleLearningResultRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * The ID of the style learning task.
   * 
   * This parameter is required.
   * 
   * @example
   * 39
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


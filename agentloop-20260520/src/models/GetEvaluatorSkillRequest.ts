// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEvaluatorSkillRequest extends $dara.Model {
  /**
   * @remarks
   * The AgentSpace name.
   * 
   * This parameter is required.
   * 
   * @example
   * prod-agentspace
   */
  agentSpace?: string;
  /**
   * @example
   * v2
   */
  evaluatorVersion?: string;
  /**
   * @remarks
   * The skill version.
   * 
   * @example
   * 1782816000000
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      evaluatorVersion: 'evaluatorVersion',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      evaluatorVersion: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


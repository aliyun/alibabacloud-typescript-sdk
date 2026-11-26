// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEvaluatorSkillRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the AgentSpace.
   * 
   * This parameter is required.
   * 
   * @example
   * prod-agentspace
   */
  agentSpace?: string;
  /**
   * @remarks
   * The version number of the custom evaluator to which the queried skill belongs. If omitted, the latestVersion of the evaluator is used. The revision number of the skill itself is specified by version.
   * 
   * @example
   * v2
   */
  evaluatorVersion?: string;
  /**
   * @remarks
   * The version of the skill.
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


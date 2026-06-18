// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiVoiceAgentDetailNewRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234***5678
   */
  agentId?: string;
  /**
   * @remarks
   * The ID of the branch. If you do not specify this parameter, the active branch is used.
   * 
   * @example
   * 12
   */
  branchId?: string;
  /**
   * @remarks
   * The ID of the version. If you do not specify this parameter, the system uses the latest published version for the specified branch. You must specify BranchId when you use this parameter.
   * 
   * @example
   * 21
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      branchId: 'BranchId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      branchId: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


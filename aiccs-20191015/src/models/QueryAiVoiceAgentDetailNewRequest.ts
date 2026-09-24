// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiVoiceAgentDetailNewRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234***5678
   */
  agentId?: string;
  /**
   * @remarks
   * The branch ID. If this parameter is left empty, the currently active branch is automatically used.
   * 
   * @example
   * 12
   */
  branchId?: string;
  /**
   * @remarks
   * The version ID. If this parameter is left empty, the latest published version of the corresponding branch is used. This parameter must be used together with BranchId.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiVoiceAgentDetailNewRequest extends $dara.Model {
  /**
   * @example
   * 12345678
   */
  agentId?: number;
  /**
   * @example
   * 12
   */
  branchId?: number;
  /**
   * @example
   * 21
   */
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      branchId: 'BranchId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      branchId: 'number',
      versionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


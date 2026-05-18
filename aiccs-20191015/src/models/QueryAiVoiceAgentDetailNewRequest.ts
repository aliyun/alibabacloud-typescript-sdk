// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiVoiceAgentDetailNewRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345678
   */
  agentId?: string;
  /**
   * @example
   * 12
   */
  branchId?: string;
  /**
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


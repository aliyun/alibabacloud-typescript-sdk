// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDiagnosticTaskRequestAiJobLogInfoAiJobLogsLogs } from "./CreateDiagnosticTaskRequestAiJobLogInfoAiJobLogsLogs";


export class CreateDiagnosticTaskRequestAiJobLogInfoAiJobLogs extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * null
   */
  aiInstance?: string;
  /**
   * @remarks
   * The logs.
   */
  logs?: CreateDiagnosticTaskRequestAiJobLogInfoAiJobLogsLogs[];
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * e01-tw-p2p2al5u1hn
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      aiInstance: 'AiInstance',
      logs: 'Logs',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiInstance: 'string',
      logs: { 'type': 'array', 'itemType': CreateDiagnosticTaskRequestAiJobLogInfoAiJobLogsLogs },
      nodeId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


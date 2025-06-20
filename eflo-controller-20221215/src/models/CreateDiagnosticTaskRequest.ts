// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDiagnosticTaskRequestAiJobLogInfo } from "./CreateDiagnosticTaskRequestAiJobLogInfo";


export class CreateDiagnosticTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The log information.
   */
  aiJobLogInfo?: CreateDiagnosticTaskRequestAiJobLogInfo;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * i118913031696573280136
   */
  clusterId?: string;
  /**
   * @remarks
   * The diagnostics type.
   * 
   * @example
   * CheckByAiJobLogs
   */
  diagnosticType?: string;
  /**
   * @remarks
   * The IDs of the nodes.
   */
  nodeIds?: string[];
  static names(): { [key: string]: string } {
    return {
      aiJobLogInfo: 'AiJobLogInfo',
      clusterId: 'ClusterId',
      diagnosticType: 'DiagnosticType',
      nodeIds: 'NodeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiJobLogInfo: CreateDiagnosticTaskRequestAiJobLogInfo,
      clusterId: 'string',
      diagnosticType: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.aiJobLogInfo && typeof (this.aiJobLogInfo as any).validate === 'function') {
      (this.aiJobLogInfo as any).validate();
    }
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


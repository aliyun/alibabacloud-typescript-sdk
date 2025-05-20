// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiagnosticTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Log information
   */
  aiJobLogInfoShrink?: string;
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i118913031696573280136
   */
  clusterId?: string;
  /**
   * @remarks
   * Diagnostic type.
   * 
   * @example
   * CheckByAiJobLogs
   */
  diagnosticType?: string;
  /**
   * @remarks
   * List of node IDs
   */
  nodeIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      aiJobLogInfoShrink: 'AiJobLogInfo',
      clusterId: 'ClusterId',
      diagnosticType: 'DiagnosticType',
      nodeIdsShrink: 'NodeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiJobLogInfoShrink: 'string',
      clusterId: 'string',
      diagnosticType: 'string',
      nodeIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


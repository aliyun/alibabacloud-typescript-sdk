// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiagnosticTaskRequestAiJobLogInfoAiJobLogsLogs extends $dara.Model {
  /**
   * @remarks
   * The sending date in the yyyymmdd format.
   * 
   * @example
   * 2024-08-05T10:10:01
   */
  datetime?: string;
  /**
   * @remarks
   * The log content.
   * 
   * @example
   * success
   */
  logContent?: string;
  static names(): { [key: string]: string } {
    return {
      datetime: 'Datetime',
      logContent: 'LogContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datetime: 'string',
      logContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class CreateDiagnosticTaskRequestAiJobLogInfo extends $dara.Model {
  /**
   * @remarks
   * The task logs.
   */
  aiJobLogs?: CreateDiagnosticTaskRequestAiJobLogInfoAiJobLogs[];
  /**
   * @remarks
   * The end time. The value is in the timestamp format. Unit: seconds.
   * 
   * >  This timestamp must indicate a point in time that is accurate to the minute.
   * 
   * @example
   * 2024-08-05T10:10:01
   */
  endTime?: string;
  /**
   * @remarks
   * The start time. The value is in the timestamp format. Unit: seconds.
   * 
   * >  This timestamp must indicate a point in time that is accurate to the minute.
   * 
   * @example
   * 2024-10-11T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      aiJobLogs: 'AiJobLogs',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiJobLogs: { 'type': 'array', 'itemType': CreateDiagnosticTaskRequestAiJobLogInfoAiJobLogs },
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aiJobLogs)) {
      $dara.Model.validateArray(this.aiJobLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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


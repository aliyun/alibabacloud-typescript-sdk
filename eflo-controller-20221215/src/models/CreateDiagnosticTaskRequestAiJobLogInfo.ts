// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDiagnosticTaskRequestAiJobLogInfoAiJobLogs } from "./CreateDiagnosticTaskRequestAiJobLogInfoAiJobLogs";


export class CreateDiagnosticTaskRequestAiJobLogInfo extends $dara.Model {
  /**
   * @remarks
   * Task logs
   */
  aiJobLogs?: CreateDiagnosticTaskRequestAiJobLogInfoAiJobLogs[];
  /**
   * @remarks
   * End time. In timestamp format, unit: seconds.
   * > Must be on the hour or half-hour mark.
   * 
   * @example
   * 2024-08-05T10:10:01
   */
  endTime?: string;
  /**
   * @remarks
   * Start time. In timestamp format, unit: seconds.
   * > Must be on the hour or half-hour mark.
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


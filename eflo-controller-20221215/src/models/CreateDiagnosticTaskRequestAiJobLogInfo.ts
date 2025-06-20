// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDiagnosticTaskRequestAiJobLogInfoAiJobLogs } from "./CreateDiagnosticTaskRequestAiJobLogInfoAiJobLogs";


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


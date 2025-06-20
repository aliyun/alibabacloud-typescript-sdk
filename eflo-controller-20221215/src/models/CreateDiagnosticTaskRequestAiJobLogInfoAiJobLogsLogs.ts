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


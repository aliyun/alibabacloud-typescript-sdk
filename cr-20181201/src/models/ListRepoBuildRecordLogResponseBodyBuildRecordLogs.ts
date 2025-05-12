// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoBuildRecordLogResponseBodyBuildRecordLogs extends $dara.Model {
  /**
   * @remarks
   * The stage of the building that is recorded in the log entry.
   * 
   * @example
   * GIT_CLONE
   */
  buildStage?: string;
  /**
   * @remarks
   * The line number of the log entry.
   * 
   * @example
   * 2
   */
  lineNumber?: number;
  /**
   * @remarks
   * The content of the log.
   * 
   * @example
   * fetch stage begin
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      buildStage: 'BuildStage',
      lineNumber: 'LineNumber',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildStage: 'string',
      lineNumber: 'number',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


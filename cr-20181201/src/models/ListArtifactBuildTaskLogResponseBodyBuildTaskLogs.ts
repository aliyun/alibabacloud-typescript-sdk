// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactBuildTaskLogResponseBodyBuildTaskLogs extends $dara.Model {
  /**
   * @remarks
   * The row number of the log entry.
   * 
   * @example
   * 1
   */
  lineNumber?: number;
  /**
   * @remarks
   * The log data.
   * 
   * @example
   * Start Build
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      lineNumber: 'LineNumber',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


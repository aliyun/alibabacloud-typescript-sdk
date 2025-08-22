// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteResourceExportTaskResponseBody extends $dara.Model {
  /**
   * @example
   * ex-3b6cb9fa4751a6e645ad8365e6
   */
  exportTaskId?: string;
  /**
   * @example
   * v1
   */
  exportVersion?: string;
  /**
   * @example
   * 0B0A7C19-9077-5975-ACBD-DEE718787992
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exportTaskId: 'exportTaskId',
      exportVersion: 'exportVersion',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTaskId: 'string',
      exportVersion: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


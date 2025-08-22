// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelResourceExportTaskResponseBody extends $dara.Model {
  /**
   * @example
   * ex-3b6cb9fa4751a6e5cdc6460282
   */
  exportTaskId?: string;
  /**
   * @example
   * v1
   */
  exportVersion?: string;
  /**
   * @example
   * 136B3926-DD90-5DB2-96EC-8BAD6407D1C9
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


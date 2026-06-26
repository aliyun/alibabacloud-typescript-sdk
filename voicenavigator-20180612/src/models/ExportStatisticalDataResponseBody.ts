// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportStatisticalDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous export task.
   * 
   * @example
   * 6be5a9f1-406e-424e-a17b-b6fb86ee3cc9
   */
  exportTaskId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * c62e6789-28a8-41db-941e-171a01d3b3b9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exportTaskId: 'ExportTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTaskId: 'string',
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


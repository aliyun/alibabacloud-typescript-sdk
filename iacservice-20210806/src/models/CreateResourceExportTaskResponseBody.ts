// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceExportTaskResponseBody extends $dara.Model {
  /**
   * @example
   * ex-4a1ec8b7003d24528326821be
   */
  exportTaskId?: string;
  /**
   * @example
   * v1
   */
  exportVersion?: string;
  /**
   * @example
   * CFD8C2A8-5BE7-56D2-916D-64039B8E06E3
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


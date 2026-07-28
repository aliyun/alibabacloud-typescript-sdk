// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourceExportTaskAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource export task.
   * 
   * @example
   * ex-kw161ol8te1n701e1igt8q8
   */
  exportTaskId?: string;
  /**
   * @remarks
   * The version of the export task.
   * 
   * @example
   * v1
   */
  exportVersion?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B43F08A7-F2A3-54D3-BDA4-69C9F32A7B9F
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


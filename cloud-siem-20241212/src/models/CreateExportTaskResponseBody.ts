// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExportTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the exported file.
   * 
   * @example
   * event_1193842352994186_17344888****.xlsx
   */
  fileName?: string;
  /**
   * @remarks
   * The ID of the export task.
   * 
   * @example
   * 400151
   */
  id?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      id: 'number',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSuspEventExportInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the export task.
   * > You can call the [ExportSuspEvents](~~ExportSuspEvents~~) operation to export events and obtain this ID.
   * 
   * This parameter is required. If it is not provided, the API returns an HTTP 400 error.
   * 
   * @example
   * 123
   */
  exportId?: number;
  static names(): { [key: string]: string } {
    return {
      exportId: 'ExportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


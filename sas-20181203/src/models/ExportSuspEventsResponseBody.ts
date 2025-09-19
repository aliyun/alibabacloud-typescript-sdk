// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportSuspEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the exported file.
   * 
   * @example
   * suspicious_event_20221209
   */
  fileName?: string;
  /**
   * @remarks
   * The ID of the export record of the anomalous event.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EF145C20-6A19-529A-8BDD-0671DXXXXXX
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


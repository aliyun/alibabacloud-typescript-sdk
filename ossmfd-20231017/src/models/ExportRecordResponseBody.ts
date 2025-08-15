// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportRecordResponseBody extends $dara.Model {
  /**
   * @example
   * health_check_export_20******
   */
  fileName?: string;
  /**
   * @example
   * 100******
   */
  id?: number;
  /**
   * @example
   * AAC546A5-5EDC-5939-86A3-56DFAF******
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


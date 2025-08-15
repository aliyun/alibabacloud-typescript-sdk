// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportRecordRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * exportObjectScanEvents
   */
  exportType?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * {"currentPage":1,"pageSize":10}
   */
  params?: string;
  static names(): { [key: string]: string } {
    return {
      exportType: 'ExportType',
      lang: 'Lang',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportType: 'string',
      lang: 'string',
      params: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


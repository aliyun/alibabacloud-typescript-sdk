// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTempFileDownloadLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The key that is used to download a file.
   * 
   * This parameter is required.
   * 
   * @example
   * temp/1797733170015112/report/r-000jdzknbp39cnf9hs99/r-000jdzknbp39cnf9hs99-total.csv
   */
  tempFileKey?: string;
  static names(): { [key: string]: string } {
    return {
      tempFileKey: 'TempFileKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tempFileKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


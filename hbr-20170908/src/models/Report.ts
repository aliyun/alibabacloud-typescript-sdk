// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Report extends $dara.Model {
  /**
   * @example
   * temp/report/r-0000dnz7p4pk31u6madf_failed.csv
   */
  failedFiles?: string;
  /**
   * @example
   * temp/report/r-0000dnz7p4pk31u6madf_skipped.csv
   */
  skippedFiles?: string;
  /**
   * @example
   * temp/report/r-0000dnz7p4pk31u6madf_success.csv
   */
  successFiles?: string;
  /**
   * @example
   * temp/report/r-0000dnz7p4pk31u6madf_total.csv
   */
  totalFiles?: string;
  static names(): { [key: string]: string } {
    return {
      failedFiles: 'FailedFiles',
      skippedFiles: 'SkippedFiles',
      successFiles: 'SuccessFiles',
      totalFiles: 'TotalFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedFiles: 'string',
      skippedFiles: 'string',
      successFiles: 'string',
      totalFiles: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


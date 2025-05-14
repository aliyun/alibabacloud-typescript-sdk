// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterInspectReportDetailResponseBodySummary extends $dara.Model {
  /**
   * @remarks
   * The number of check items whose inspection result is advice.
   * 
   * @example
   * 0
   */
  adviceCount?: number;
  /**
   * @remarks
   * Check the status code of the inspection task.
   * 
   * @example
   * warning
   */
  code?: string;
  /**
   * @remarks
   * The number of check items whose inspection result is error.
   * 
   * @example
   * 0
   */
  errorCount?: number;
  /**
   * @remarks
   * The number of check items whose inspection result is normal.
   * 
   * @example
   * 10
   */
  normalCount?: number;
  /**
   * @remarks
   * The number of check items whose inspection result is warning.
   * 
   * @example
   * 1
   */
  warnCount?: number;
  static names(): { [key: string]: string } {
    return {
      adviceCount: 'adviceCount',
      code: 'code',
      errorCount: 'errorCount',
      normalCount: 'normalCount',
      warnCount: 'warnCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceCount: 'number',
      code: 'string',
      errorCount: 'number',
      normalCount: 'number',
      warnCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


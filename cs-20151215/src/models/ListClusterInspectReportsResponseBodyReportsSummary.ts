// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterInspectReportsResponseBodyReportsSummary extends $dara.Model {
  /**
   * @remarks
   * The number of items whose result is advice.
   * 
   * @example
   * 0
   */
  adviceCount?: number;
  /**
   * @remarks
   * Aggregated inspection task result code.
   * 
   * @example
   * warning
   */
  code?: string;
  /**
   * @remarks
   * The number of items whose result is error.
   * 
   * @example
   * 0
   */
  errorCount?: number;
  /**
   * @remarks
   * The number of items whose result is normal.
   * 
   * @example
   * 1
   */
  normalCount?: number;
  /**
   * @remarks
   * The number of items whose result is warning.
   * 
   * @example
   * 0
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


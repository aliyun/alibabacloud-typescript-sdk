// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterInspectReportsResponseBodyReportsSummary extends $dara.Model {
  /**
   * @example
   * 0
   */
  adviceCount?: number;
  /**
   * @example
   * warning
   */
  code?: string;
  /**
   * @example
   * 0
   */
  errorCount?: number;
  /**
   * @example
   * 1
   */
  normalCount?: number;
  /**
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HealthSummary extends $dara.Model {
  /**
   * @example
   * 2
   */
  badCount?: number;
  /**
   * @example
   * 2
   */
  goodCount?: number;
  /**
   * @example
   * 0
   */
  noneCount?: number;
  /**
   * @example
   * 2
   */
  stoppedCount?: number;
  /**
   * @example
   * 8
   */
  totalCount?: number;
  /**
   * @example
   * 0
   */
  unknownCount?: number;
  /**
   * @example
   * 2
   */
  warningCount?: number;
  static names(): { [key: string]: string } {
    return {
      badCount: 'BadCount',
      goodCount: 'GoodCount',
      noneCount: 'NoneCount',
      stoppedCount: 'StoppedCount',
      totalCount: 'TotalCount',
      unknownCount: 'UnknownCount',
      warningCount: 'WarningCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      badCount: 'number',
      goodCount: 'number',
      noneCount: 'number',
      stoppedCount: 'number',
      totalCount: 'number',
      unknownCount: 'number',
      warningCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


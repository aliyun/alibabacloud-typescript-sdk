// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckTrialFixCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the vulnerability can be fixed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  canFix?: boolean;
  /**
   * @remarks
   * The quota usage required for the current fix operation.
   * 
   * @example
   * 10
   */
  expendCount?: number;
  /**
   * @remarks
   * The quota that remains after the current fix operation is complete.
   * 
   * @example
   * 0
   */
  remainCount?: number;
  /**
   * @remarks
   * The number of the vulnerabilities that are fixed.
   * 
   * @example
   * 10
   */
  repairedCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 24A20733-10A0-4AF6-BE6B-E3322413BB68
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether Security Center is in free trial. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isTrial?: boolean;
  static names(): { [key: string]: string } {
    return {
      canFix: 'CanFix',
      expendCount: 'ExpendCount',
      remainCount: 'RemainCount',
      repairedCount: 'RepairedCount',
      requestId: 'RequestId',
      isTrial: 'isTrial',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canFix: 'boolean',
      expendCount: 'number',
      remainCount: 'number',
      repairedCount: 'number',
      requestId: 'string',
      isTrial: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


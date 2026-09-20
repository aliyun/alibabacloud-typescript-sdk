// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeMinorVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B8EC240-BB13-4DBC-B955-F90170E82609
   */
  requestId?: string;
  /**
   * @remarks
   * The components that were successfully upgraded.
   * 
   * @example
   * HADOOP
   */
  upgradingComponents?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      upgradingComponents: 'UpgradingComponents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      upgradingComponents: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


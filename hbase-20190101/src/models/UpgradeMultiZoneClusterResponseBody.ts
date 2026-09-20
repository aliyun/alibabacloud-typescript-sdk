// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeMultiZoneClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C532A4D4-9451-4460-BB3E-300FEC852D3F
   */
  requestId?: string;
  /**
   * @remarks
   * The components that triggered the upgrade among the multiple components to be upgraded.
   * 
   * @example
   * LINDORM
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


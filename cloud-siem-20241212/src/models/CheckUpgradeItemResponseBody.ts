// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CheckUpgradeItemResponseBodyUpgradeItem extends $dara.Model {
  /**
   * @example
   * OK
   */
  checkResult?: string;
  /**
   * @example
   * success
   */
  checkStatus?: string;
  /**
   * @example
   * incident_upgrade
   */
  upgradeItemId?: string;
  static names(): { [key: string]: string } {
    return {
      checkResult: 'CheckResult',
      checkStatus: 'CheckStatus',
      upgradeItemId: 'UpgradeItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResult: 'string',
      checkStatus: 'string',
      upgradeItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUpgradeItemResponseBody extends $dara.Model {
  /**
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  upgradeItem?: CheckUpgradeItemResponseBodyUpgradeItem;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      upgradeItem: 'UpgradeItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      upgradeItem: CheckUpgradeItemResponseBodyUpgradeItem,
    };
  }

  validate() {
    if(this.upgradeItem && typeof (this.upgradeItem as any).validate === 'function') {
      (this.upgradeItem as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSendifyInfoResponseBody extends $dara.Model {
  /**
   * @example
   * http
   */
  buyResourcePackageUrl?: string;
  /**
   * @example
   * http
   */
  buyUrl?: string;
  /**
   * @example
   * 0.3
   */
  discount?: string;
  /**
   * @example
   * http
   */
  downgradeUrl?: string;
  /**
   * @example
   * 到期
   */
  expireTime?: string;
  /**
   * @example
   * 了解更多
   */
  learnMoreUrl?: string;
  opened?: boolean;
  /**
   * @example
   * TRIAL
   */
  productCode?: string;
  /**
   * @example
   * https
   */
  renewUrl?: string;
  /**
   * @example
   * 1234
   */
  requestId?: string;
  /**
   * @example
   * http
   */
  specUpgradeUrl?: string;
  /**
   * @example
   * VALID
   */
  status?: string;
  supportTrial?: boolean;
  /**
   * @example
   * 升配链接
   */
  upgradeUrl?: string;
  static names(): { [key: string]: string } {
    return {
      buyResourcePackageUrl: 'BuyResourcePackageUrl',
      buyUrl: 'BuyUrl',
      discount: 'Discount',
      downgradeUrl: 'DowngradeUrl',
      expireTime: 'ExpireTime',
      learnMoreUrl: 'LearnMoreUrl',
      opened: 'Opened',
      productCode: 'ProductCode',
      renewUrl: 'RenewUrl',
      requestId: 'RequestId',
      specUpgradeUrl: 'SpecUpgradeUrl',
      status: 'Status',
      supportTrial: 'SupportTrial',
      upgradeUrl: 'UpgradeUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyResourcePackageUrl: 'string',
      buyUrl: 'string',
      discount: 'string',
      downgradeUrl: 'string',
      expireTime: 'string',
      learnMoreUrl: 'string',
      opened: 'boolean',
      productCode: 'string',
      renewUrl: 'string',
      requestId: 'string',
      specUpgradeUrl: 'string',
      status: 'string',
      supportTrial: 'boolean',
      upgradeUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


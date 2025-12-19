// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppInstanceSpecRequest extends $dara.Model {
  /**
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @example
   * 2108341e17661121129745384e79f9
   */
  clientToken?: string;
  /**
   * @example
   * HongKong
   */
  deployArea?: string;
  extend?: string;
  /**
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @example
   * 0
   */
  siteVersion?: string;
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      bizId: 'BizId',
      clientToken: 'ClientToken',
      deployArea: 'DeployArea',
      extend: 'Extend',
      paymentType: 'PaymentType',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      bizId: 'string',
      clientToken: 'string',
      deployArea: 'string',
      extend: 'string',
      paymentType: 'string',
      siteVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


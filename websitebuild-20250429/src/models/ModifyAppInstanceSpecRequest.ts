// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppInstanceSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Generate a unique value from your client. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 2108341e17661121129745384e79f9
   */
  clientToken?: string;
  /**
   * @remarks
   * The deployment region.
   * 
   * @example
   * HongKong
   */
  deployArea?: string;
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * {\\"deliveryNodeName\\":\\"网站验收\\",\\"deliveryNodeStatus\\":\\"Reject\\",\\"deliveryOperatorRole\\":\\"Customer\\"}
   */
  extend?: string;
  /**
   * @remarks
   * The payment type.
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @remarks
   * The website version.
   * 
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


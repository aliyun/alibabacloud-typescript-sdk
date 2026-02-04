// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppInstanceSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Application type
   * 
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * Ensures idempotence of requests. Generate a unique value from your client to ensure it is unique across different requests. ClientToken supports only ASCII characters and cannot exceed 64 characters.
   * 
   * @example
   * 2108341e17661121129745384e79f9
   */
  clientToken?: string;
  /**
   * @remarks
   * Deployment area
   * 
   * @example
   * HongKong
   */
  deployArea?: string;
  /**
   * @remarks
   * Extended information
   * 
   * @example
   * {\\"deliveryNodeName\\":\\"网站验收\\",\\"deliveryNodeStatus\\":\\"Reject\\",\\"deliveryOperatorRole\\":\\"Customer\\"}
   */
  extend?: string;
  /**
   * @remarks
   * Payment type
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @remarks
   * Site version
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstancesResponseBodyServiceInstancesServiceCommodity extends $dara.Model {
  /**
   * @remarks
   * The configuration metadata related to SaaS Boost.
   * 
   * @example
   * { // Specifies whether to associate the service with the SaaS Boost commodity. Default value: false. "Enabled":true/false // The public endpoint of the SaaS Boost instance. "PublicAccessUrl":"https://example.com" }
   */
  saasBoostMetadata?: string;
  /**
   * @remarks
   * The platform type. Valid values:
   * 
   * *   marketplace: Alibaba Cloud Marketplace.
   * *   Css: Lingxiao.
   * *   SaasBoost: SaaS Boost.
   * 
   * @example
   * Marketplace
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      saasBoostMetadata: 'SaasBoostMetadata',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saasBoostMetadata: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


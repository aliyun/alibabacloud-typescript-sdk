// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnWafDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name that you want to query.
   * 
   * You can specify only one domain name in each request. You have three options to configure this parameter:
   * 
   * *   Specify an exact domain name. For example, if you set this parameter to example.com, configuration information of example.com is queried.
   * *   Specify a keyword. For example, if you set this parameter to example, configuration information about all domain names that contain example is queried.
   * *   Leave this parameter empty. If this parameter is left empty, all accelerated domain names for which WAF is configured are queried.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The region where WAF is enabled. Valid values:
   * 
   * *   **cn-hangzhou**: inside the Chinese mainland
   * *   **ap-southeast-1**: outside the Chinese mainland
   * 
   * > ap-southeast-1 includes Hong Kong (China), Macao (China), Taiwan (China), and other countries and regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * 1234
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


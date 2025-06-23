// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigWebIpSetRequest extends $dara.Model {
  /**
   * @remarks
   * The IP addresses and CIDR blocks in the blacklist. You can add up to 200 IP addresses or CIDR blocks to the blacklist.
   * 
   * @example
   * 1.1.1.1
   */
  blackList?: string[];
  /**
   * @remarks
   * The domain name of the website.
   * 
   * > A forwarding rule must be configured for the domain name. You can call the [DescribeDomains](https://help.aliyun.com/document_detail/91724.html) operation to query all domain names.
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs in Resource Management. This parameter is empty by default, which indicates that the instance belongs to the default resource group.
   * 
   * @example
   * default
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IP addresses and CIDR blocks in the whitelist. You can add up to 200 IP addresses or CIDR blocks to the whitelist.
   * 
   * @example
   * 2.2.2.2/24
   */
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      blackList: 'BlackList',
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackList: { 'type': 'array', 'itemType': 'string' },
      domain: 'string',
      resourceGroupId: 'string',
      whiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.blackList)) {
      $dara.Model.validateArray(this.blackList);
    }
    if(Array.isArray(this.whiteList)) {
      $dara.Model.validateArray(this.whiteList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


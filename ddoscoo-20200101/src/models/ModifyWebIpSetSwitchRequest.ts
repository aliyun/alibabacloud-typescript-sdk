// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebIpSetSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The details of the Blacklist/Whitelist (Domain Names) feature. This parameter is a JSON string. The value consists of the following fields:
   * 
   * **bwlist_enable**: the status of the Blacklist/Whitelist (Domain Names) feature. This field is required and must be of the integer type. Valid values:
   * 
   * *   0: turned off
   * *   1: turned on
   * 
   * This parameter is required.
   * 
   * @example
   * {"BwlistEnable":1}
   */
  config?: string;
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
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      domain: 'string',
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


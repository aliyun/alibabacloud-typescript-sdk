// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebPreciseAccessSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the Accurate Access Control policy. This parameter is a JSON string. The string contains the following fields:
   * 
   * *   **PreciseRuleEnable**: the status of the Accurate Access Control policy. This field is required and must be of the INTEGER type. Valid values:
   * 
   *     *   **0**: disables the policy.
   *     *   **1**: enables the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * {"PreciseRuleEnable":0}
   */
  config?: string;
  /**
   * @remarks
   * The domain name of the website.
   * 
   * > A forwarding rule must be configured for a domain name. You can call the [DescribeDomains](https://help.aliyun.com/document_detail/91724.html) operation to query all domain names.
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


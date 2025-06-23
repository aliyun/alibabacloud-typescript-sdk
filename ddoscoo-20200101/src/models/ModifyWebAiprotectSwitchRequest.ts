// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebAIProtectSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The details of the Intelligent Protection policy. This parameter is a JSON string. The string contains the following fields:
   * 
   * *   **AiRuleEnable**: the status of the Intelligent Protection policy. This field is required and must be of the integer type. Valid values:
   * 
   *     *   **0**: disabled
   *     *   **1**: enabled
   * 
   * This parameter is required.
   * 
   * @example
   * {"AiRuleEnable": 1}
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


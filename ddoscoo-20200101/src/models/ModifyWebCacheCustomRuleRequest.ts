// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebCacheCustomRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name of the website.
   * 
   * > A forwarding rule must be configured for the domain name, and the domain name must be associated with an instance that uses the Enhanced function plan. You can call the [DescribeDomains](https://help.aliyun.com/document_detail/91724.html) operation to query all domain names.
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
   * The details of the custom rule. This parameter is a JSON string. The string contains the following fields:
   * 
   * *   **Name**: the name of the rule. This field is required and must be of the string type.
   * 
   * *   **Uri**: the path to the cached page. This field is required and must be of the STRING type.
   * 
   * *   **Mode**: the cache mode. This field is required and must be of the STRING type. Valid values:
   * 
   *     *   **standard**: uses the standard mode.
   *     *   **aggressive**: uses the enhanced mode.
   *     *   **bypass**: No data is cached.
   * 
   * *   **CacheTtl**: the expiration time of the page cache. This field is required and must be of the INTEGER type. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"Name": "test","Uri": "/a","Mode": "standard","CacheTtl": 3600}]
   */
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
      rules: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


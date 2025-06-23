// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWebCCRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The action on the requests that trigger the custom frequency control rule. Valid values:
   * 
   * *   **close**: blocks the requests.
   * *   **captcha**: triggers Completely Automated Public Turing test to tell Computers and Humans Apart (CAPTCHA) verification for the requests.
   * 
   * This parameter is required.
   * 
   * @example
   * close
   */
  act?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60
   */
  count?: number;
  /**
   * @remarks
   * The domain name of the website.
   * 
   * >  A forwarding rule must be configured for the domain name. You can call the [DescribeDomains](https://help.aliyun.com/document_detail/91724.html) operation to query all domain names.
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  interval?: number;
  /**
   * @remarks
   * The matching mode. Valid values:
   * 
   * *   **prefix**: prefix match.
   * *   **match**: exact match.
   * 
   * >  If the **URI** of the check path contains parameters, you must set this parameter to **prefix**.
   * 
   * This parameter is required.
   * 
   * @example
   * prefix
   */
  mode?: string;
  /**
   * @remarks
   * The name of the rule. The name can be up to 128 characters in length and contain letters, digits, and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * testrule
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Proxy instance belongs in Resource Management. This parameter is empty by default, which indicates that the instance belongs to the default resource group.
   * 
   * For more information about resource groups, see [Create a resource group](https://help.aliyun.com/document_detail/94485.html).
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The blocking duration. Valid values: **60** to **86400**. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The check path.
   * 
   * >  The URI cannot be modified. The domain name of the website, the check path, and the rule name uniquely identify a rule.
   * 
   * This parameter is required.
   * 
   * @example
   * /abc/a.php
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      act: 'Act',
      count: 'Count',
      domain: 'Domain',
      interval: 'Interval',
      mode: 'Mode',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      ttl: 'Ttl',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      act: 'string',
      count: 'number',
      domain: 'string',
      interval: 'number',
      mode: 'string',
      name: 'string',
      resourceGroupId: 'string',
      ttl: 'number',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigDomainSecurityProfileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is unavailable.
   */
  cluster?: string;
  /**
   * @remarks
   * The configurations for the global mitigation policy feature. The configurations include the following fields:
   * 
   * *   **global_rule_mode**: optional. The mode for the global mitigation policy feature. Data type: string. Valid values:
   * 
   *     *   **weak**: loose.
   *     *   **default**: normal.
   *     *   **hard**: strict.
   * 
   * *   **global_rule_enable**: optional. Specifies whether to enable the global mitigation policy feature. Data type: string. Valid values:
   * 
   *     *   **0**: disabled.
   *     *   **1**: enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"global_rule_mode\\":\\"hard\\"}
   */
  config?: string;
  /**
   * @remarks
   * The domain name of the website.
   * 
   * >  A forwarding rule must be configured for the domain name. You can call the [DescribeDomains](https://help.aliyun.com/document_detail/91724.html) operation to query all domain names.
   * 
   * This parameter is required.
   * 
   * @example
   * live.abcde.com
   */
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
      config: 'Config',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      config: 'string',
      domain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


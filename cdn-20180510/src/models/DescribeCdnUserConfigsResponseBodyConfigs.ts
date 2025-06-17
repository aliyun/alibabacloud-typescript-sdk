// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnUserConfigsResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration.
   * 
   * The configuration is specified by enterprise users and public service sectors.
   * 
   * @example
   * allow_function
   */
  argName?: string;
  /**
   * @remarks
   * The value of the configuration. Valid values:
   * 
   * *   **cc_rule**: HTTP flood protection rules
   * *   **ddos_dispatch**: integration with Anti-DDoS
   * *   **edge_safe**: application security settings on POPs
   * *   **blocked_regions**: blocked regions
   * *   **http_acl_policy**: access control list (ACL) rules
   * *   **bot_manager**: bot traffic management
   * *   **ip_reputation**: IP reputation library
   * 
   * @example
   * {\\"dcdn_allow\\":[\\"cc_rule\\",\\"ddos_dispatch\\"]}
   */
  argValue?: string;
  /**
   * @remarks
   * The name of the feature.
   * 
   * @example
   * domain_business_control
   */
  functionName?: string;
  static names(): { [key: string]: string } {
    return {
      argName: 'ArgName',
      argValue: 'ArgValue',
      functionName: 'FunctionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argName: 'string',
      argValue: 'string',
      functionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


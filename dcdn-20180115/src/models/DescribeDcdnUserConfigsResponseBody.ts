// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnUserConfigsResponseBodyConfigs extends $dara.Model {
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
   * *   cc_rule: HTTP flood protection
   * *   ddos_dispatch: DDoS mitigation
   * *   edge_safe: application security on points of presence (POPs)
   * *   blocked_regions: region blacklist
   * *   http_acl_policy: precise access control
   * *   bot_manager: bot traffic management
   * *   ip_reputation: IP reputation library
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

export class DescribeDcdnUserConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The user configurations.
   */
  configs?: DescribeDcdnUserConfigsResponseBodyConfigs[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 06D29681-B7CD-4034-A8CC-28AFFA213539
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': DescribeDcdnUserConfigsResponseBodyConfigs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


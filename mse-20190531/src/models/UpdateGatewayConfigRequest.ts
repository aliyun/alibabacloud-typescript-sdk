// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want to display the results. Valid values: zh (default): Chinese. en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The configuration name of the parameter. Valid values:
   * 
   * - EnableHttp2
   * 
   * - DownstreamIdleTime
   * 
   * - PreserveHeaderFormat
   * 
   * - UpstreamIdleTimeout
   * 
   * - EnableXffTrustedCidrs
   * 
   * - EnableK8sSourceWorkloadFilter
   * 
   * This parameter is required.
   * 
   * @example
   * EnableK8sSourceWorkloadFilter
   */
  configName?: string;
  /**
   * @remarks
   * The configuration value of the parameter. Examples:
   * 
   * - EnableHttp2
   * 
   * ```
   * true / false
   * ```
   * 
   * - DownstreamIdleTime
   * 
   * ```
   * 15
   * ```
   * 
   * - PreserveHeaderFormat
   * 
   * ```
   * true / false
   * ```
   * 
   * - UpstreamIdleTimeout
   * 
   * ```
   * 60
   * ```
   * 
   * - EnableXffTrustedCidrs
   * 
   * ```json
   * {"enable":true,"ipListContent":"192.168.1.0/24
   * 2.2.2.2"}
   * ```
   * 
   * - EnableK8sSourceWorkloadFilter
   * 
   * ```json
   * 	
   * {"enable":true,"filterOpt":"EQUAL","labelKey":"key","labelValue":"value"}
   * ```
   * 
   * This parameter is required.
   * 
   * @example
   * {"enable":true,"filterOpt":"EQUAL","labelKey":"key","labelValue":"value"}
   */
  configValue?: string;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-b525dc1adf3c486ab96224a6346*****
   */
  gatewayUniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      configName: 'ConfigName',
      configValue: 'ConfigValue',
      gatewayUniqueId: 'GatewayUniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      configName: 'string',
      configValue: 'string',
      gatewayUniqueId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


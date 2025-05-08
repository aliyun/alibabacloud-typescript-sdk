// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayConfigRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * EnableK8sSourceWorkloadFilter
   */
  configName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"enable":true,"filterOpt":"EQUAL","labelKey":"key","labelValue":"value"}
   */
  configValue?: string;
  /**
   * @remarks
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


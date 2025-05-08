// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * mse-09k1q11****
   */
  clusterId?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * null
   */
  configType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * mse_prepaid_public_cn-st2212****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether runtime configurations are required.
   * 
   * @example
   * true
   */
  needRunningConf?: boolean;
  /**
   * @remarks
   * The extended request parameters in the JSON format.
   * 
   * @example
   * {}
   */
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      configType: 'ConfigType',
      instanceId: 'InstanceId',
      needRunningConf: 'NeedRunningConf',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      configType: 'string',
      instanceId: 'string',
      needRunningConf: 'boolean',
      requestPars: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryClusterInfoRequest extends $dara.Model {
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
   * Specifies whether to query the configuration of a public IP address whitelist.
   * 
   * @example
   * false
   */
  aclSwitch?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * mse-09k1q11****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * mse_prepaid_public_cn-7mz2t63ci03
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 20574710974****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
      aclSwitch: 'AclSwitch',
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      regionId: 'RegionId',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      aclSwitch: 'boolean',
      clusterId: 'string',
      instanceId: 'string',
      orderId: 'string',
      regionId: 'string',
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


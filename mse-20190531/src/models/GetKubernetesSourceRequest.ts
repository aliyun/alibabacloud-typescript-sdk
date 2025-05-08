// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKubernetesSourceRequest extends $dara.Model {
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
   * The unique ID of the gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-c5d1aadb7df646cfb7065fbf75c1****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * Specifies whether to obtain the information about all Kubernetes clusters. If you set the value to false, only the information about unassociated clusters is obtained.
   */
  isAll?: boolean;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-bp1t50e045b5g7i3p****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      isAll: 'IsAll',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      isAll: 'boolean',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


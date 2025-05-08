// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewaySlbShrinkRequest extends $dara.Model {
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
   * gw-9cdcf8e4f58144059e73ff4c5ef9****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The HTTP port number (virtual service group).
   * 
   * @example
   * 80
   */
  httpPort?: number;
  /**
   * @remarks
   * The HTTPS port number (virtual service group).
   * 
   * @example
   * 443
   */
  httpsPort?: number;
  /**
   * @remarks
   * The ID of the HTTPS virtual service group.
   * 
   * @example
   * 353
   */
  httpsVServerGroupId?: string;
  /**
   * @remarks
   * The service weight.
   * 
   * @example
   * 80
   */
  serviceWeight?: number;
  /**
   * @remarks
   * The ID of the SLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp18t6jjskwxh6wy1****
   */
  slbId?: string;
  /**
   * @remarks
   * The type of the service source. Valid values:
   * 
   * *   PUB_NET: Internet
   * *   PRIVATE_NET: VPC
   * 
   * @example
   * PUB_NET
   */
  type?: string;
  /**
   * @remarks
   * The ID of the HTTP virtual service group.
   * 
   * @example
   * 353
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * The SLB monitoring information.
   */
  VServiceListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      httpPort: 'HttpPort',
      httpsPort: 'HttpsPort',
      httpsVServerGroupId: 'HttpsVServerGroupId',
      serviceWeight: 'ServiceWeight',
      slbId: 'SlbId',
      type: 'Type',
      VServerGroupId: 'VServerGroupId',
      VServiceListShrink: 'VServiceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      httpPort: 'number',
      httpsPort: 'number',
      httpsVServerGroupId: 'string',
      serviceWeight: 'number',
      slbId: 'string',
      type: 'string',
      VServerGroupId: 'string',
      VServiceListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


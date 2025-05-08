// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayServiceRequestFilterParams extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-5017305290e14centbrveca****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The group.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The namespace to which the service belongs.
   * 
   * @example
   * public
   */
  namespace?: string;
  /**
   * @remarks
   * The protocol of the service.
   * 
   * *   HTTP
   * *   HTTPS
   * *   HTTP2
   * *   GRPC
   * *   DUBBO
   * 
   * @example
   * HTTP
   */
  serviceProtocol?: string;
  /**
   * @remarks
   * The type of the source.
   * 
   * @example
   * MSE
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayUniqueId: 'GatewayUniqueId',
      groupName: 'GroupName',
      name: 'Name',
      namespace: 'Namespace',
      serviceProtocol: 'ServiceProtocol',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayUniqueId: 'string',
      groupName: 'string',
      name: 'string',
      namespace: 'string',
      serviceProtocol: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


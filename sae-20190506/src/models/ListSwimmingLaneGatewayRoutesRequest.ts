// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSwimmingLaneGatewayRoutesRequest extends $dara.Model {
  /**
   * @example
   * gw-277c0727535f4aae917e48de0f******
   */
  gatewayUniqueId?: string;
  /**
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayUniqueId: 'GatewayUniqueId',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayUniqueId: 'string',
      namespaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetChainResponseBodyChainConfigNodes } from "./GetChainResponseBodyChainConfigNodes";
import { GetChainResponseBodyChainConfigRouters } from "./GetChainResponseBodyChainConfigRouters";


export class GetChainResponseBodyChainConfig extends $dara.Model {
  /**
   * @example
   * cci-lz3ycgo69ukt****
   */
  chainConfigId?: string;
  /**
   * @example
   * true
   */
  isActive?: boolean;
  nodes?: GetChainResponseBodyChainConfigNodes[];
  routers?: GetChainResponseBodyChainConfigRouters[];
  /**
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      chainConfigId: 'ChainConfigId',
      isActive: 'IsActive',
      nodes: 'Nodes',
      routers: 'Routers',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainConfigId: 'string',
      isActive: 'boolean',
      nodes: { 'type': 'array', 'itemType': GetChainResponseBodyChainConfigNodes },
      routers: { 'type': 'array', 'itemType': GetChainResponseBodyChainConfigRouters },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    if(Array.isArray(this.routers)) {
      $dara.Model.validateArray(this.routers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


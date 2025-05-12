// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateElasticNetworkInterfaceResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID.
   * 
   * @example
   * leni-1fejojjo****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * The ID of the Lingjun node.
   * 
   * @example
   * e01-cn-lbj3aej****
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticNetworkInterfaceId: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


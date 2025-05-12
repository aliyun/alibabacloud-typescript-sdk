// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteElasticNetworkInterfaceResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * Lingjun Node ID
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


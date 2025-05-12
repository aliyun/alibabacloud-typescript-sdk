// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFabricTopologyResponseBodyContentTopoInfo extends $dara.Model {
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * core-1
   */
  layerName?: string;
  /**
   * @remarks
   * Hierarchical resource types
   * 
   * Valid value:
   * 
   * *   core: core layer.
   * *   node: Lingjun node.
   * *   lni: lingjun network interface controller.
   * *   spine: backbone layer.
   * *   leaf: access layer
   * 
   * @example
   * core
   */
  layerType?: string;
  /**
   * @remarks
   * Next Level
   */
  nextLayer?: any[];
  static names(): { [key: string]: string } {
    return {
      layerName: 'LayerName',
      layerType: 'LayerType',
      nextLayer: 'NextLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layerName: 'string',
      layerType: 'string',
      nextLayer: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.nextLayer)) {
      $dara.Model.validateArray(this.nextLayer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


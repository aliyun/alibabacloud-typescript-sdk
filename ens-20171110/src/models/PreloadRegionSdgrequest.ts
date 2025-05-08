// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreloadRegionSDGRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the destination nodes.
   * 
   * This parameter is required.
   */
  destinationRegionIds?: string[];
  /**
   * @remarks
   * An array that consists of queried namespaces.
   */
  namespaces?: string[];
  /**
   * @remarks
   * The number of redundant replicas to support rapid deployment.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  redundantNum?: number;
  /**
   * @remarks
   * The ID of the SDG for which data is preloaded.
   * 
   * This parameter is required.
   * 
   * @example
   * sdg-xxxx
   */
  SDGId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationRegionIds: 'DestinationRegionIds',
      namespaces: 'Namespaces',
      redundantNum: 'RedundantNum',
      SDGId: 'SDGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationRegionIds: { 'type': 'array', 'itemType': 'string' },
      namespaces: { 'type': 'array', 'itemType': 'string' },
      redundantNum: 'number',
      SDGId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.destinationRegionIds)) {
      $dara.Model.validateArray(this.destinationRegionIds);
    }
    if(Array.isArray(this.namespaces)) {
      $dara.Model.validateArray(this.namespaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


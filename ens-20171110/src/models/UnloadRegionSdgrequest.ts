// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnloadRegionSDGRequest extends $dara.Model {
  /**
   * @remarks
   * The destination nodes.
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
   * Deletes the shared data group (SDG) ID of the preloaded data.
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
      SDGId: 'SDGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationRegionIds: { 'type': 'array', 'itemType': 'string' },
      namespaces: { 'type': 'array', 'itemType': 'string' },
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


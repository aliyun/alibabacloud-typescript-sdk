// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreloadRegionSDGRequest extends $dara.Model {
  /**
   * @remarks
   * The list of destination edge zones.
   * 
   * This parameter is required.
   */
  destinationRegionIds?: string[];
  /**
   * @remarks
   * The type of the shared cloud disk to be created. Valid values:
   * 
   * - standard: standard cloud disk.
   * 
   * - rbd: rbd cloud disk.
   * 
   * >
   * >- If you do not specify the shared cloud disk type, a standard cloud disk is created by default.
   * 
   * @example
   * rbd
   */
  diskType?: string;
  /**
   * @remarks
   * The list of namespaces.
   */
  namespaces?: string[];
  /**
   * @remarks
   * The redundancy count to support fast deployment.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  redundantNum?: number;
  /**
   * @remarks
   * The ID of the SDG that you want to preload.
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
      diskType: 'DiskType',
      namespaces: 'Namespaces',
      redundantNum: 'RedundantNum',
      SDGId: 'SDGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationRegionIds: { 'type': 'array', 'itemType': 'string' },
      diskType: 'string',
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


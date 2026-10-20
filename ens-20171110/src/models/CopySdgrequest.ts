// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopySDGRequest extends $dara.Model {
  /**
   * @remarks
   * The list of destination edge zones.
   * 
   * This parameter is required.
   */
  destinationRegionIds?: string[];
  /**
   * @remarks
   * The ID of the SDG to copy.
   * 
   * This parameter is required.
   * 
   * @example
   * sdg-xxx
   */
  SDGId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationRegionIds: 'DestinationRegionIds',
      SDGId: 'SDGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationRegionIds: { 'type': 'array', 'itemType': 'string' },
      SDGId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.destinationRegionIds)) {
      $dara.Model.validateArray(this.destinationRegionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


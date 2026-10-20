// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopySDGShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of destination edge zones.
   * 
   * This parameter is required.
   */
  destinationRegionIdsShrink?: string;
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
      destinationRegionIdsShrink: 'DestinationRegionIds',
      SDGId: 'SDGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationRegionIdsShrink: 'string',
      SDGId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


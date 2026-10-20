// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnloadRegionSDGShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of destination edge zones.
   * 
   * This parameter is required.
   */
  destinationRegionIdsShrink?: string;
  /**
   * @remarks
   * The list of namespaces.
   */
  namespacesShrink?: string;
  /**
   * @remarks
   * The ID of the SDG from which to delete preloaded data.
   * 
   * This parameter is required.
   * 
   * @example
   * sdg-xxxx
   */
  SDGId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationRegionIdsShrink: 'DestinationRegionIds',
      namespacesShrink: 'Namespaces',
      SDGId: 'SDGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationRegionIdsShrink: 'string',
      namespacesShrink: 'string',
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


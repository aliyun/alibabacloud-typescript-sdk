// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnloadRegionSDGShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The destination nodes.
   * 
   * This parameter is required.
   */
  destinationRegionIdsShrink?: string;
  /**
   * @remarks
   * An array that consists of queried namespaces.
   */
  namespacesShrink?: string;
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


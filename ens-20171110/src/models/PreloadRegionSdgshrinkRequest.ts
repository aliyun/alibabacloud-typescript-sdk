// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreloadRegionSDGShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the destination nodes.
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
      destinationRegionIdsShrink: 'DestinationRegionIds',
      namespacesShrink: 'Namespaces',
      redundantNum: 'RedundantNum',
      SDGId: 'SDGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationRegionIdsShrink: 'string',
      namespacesShrink: 'string',
      redundantNum: 'number',
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


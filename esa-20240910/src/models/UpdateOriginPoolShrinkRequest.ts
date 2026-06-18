// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOriginPoolShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the origin pool:
   * 
   * - true: Enables the origin pool.
   * 
   * - false: Disables the origin pool.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The origin pool ID. Get this ID by calling the [ListOriginPools](~~ListOriginPools~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1038520525196928
   */
  id?: number;
  /**
   * @remarks
   * An array of origin configurations.
   */
  originsShrink?: string;
  /**
   * @remarks
   * The site ID. Get this ID by calling the [ListSites](~~ListSites~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 216558609793952
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      id: 'Id',
      originsShrink: 'Origins',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      id: 'number',
      originsShrink: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


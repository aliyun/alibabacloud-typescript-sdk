// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOriginPoolShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the origin address pool is enabled. Valid values:
   * 
   * - true: Enabled.
   * - false: Not enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The origin address pool ID. You can call the [ListOriginPools](~~ListOriginPools~~) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1038520525196928
   */
  id?: number;
  /**
   * @remarks
   * The origin server information added to the origin address pool. Use an array to pass multiple origin servers.
   */
  originsShrink?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the ID.
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


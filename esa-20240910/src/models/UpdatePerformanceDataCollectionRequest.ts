// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePerformanceDataCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * Enables or disables Performance Data Collection. Valid values:
   * 
   * - `on`: Enables the Feature.
   * 
   * - `off`: Disables the Feature.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The ID of the Site. You can get this ID by calling the [ListSites](~~ListSites~~) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 34003500310****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
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


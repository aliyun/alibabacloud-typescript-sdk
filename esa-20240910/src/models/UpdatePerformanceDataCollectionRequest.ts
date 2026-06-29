// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePerformanceDataCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable quality data collection. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The site ID. You can obtain the ID by calling the [ListSites](~~ListSites~~) operation.
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


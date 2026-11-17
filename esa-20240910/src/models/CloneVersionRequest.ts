// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the site. You can obtain the ID by calling the [ListSites](~~ListSites~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 15846237886****
   */
  siteId?: number;
  /**
   * @remarks
   * The version number of the source site version.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


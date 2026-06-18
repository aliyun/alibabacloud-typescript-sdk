// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSitePauseRequest extends $dara.Model {
  /**
   * @remarks
   * The site ID. Call the [ListSites](~~ListSites~~) operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


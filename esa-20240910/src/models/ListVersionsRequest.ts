// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the site. You can obtain the ID by calling the [ListSites](~~ListSites~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 33968830844****
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


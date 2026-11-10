// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportRecordCnamesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the site. You can call the [ListSites](~~ListSites~~) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890
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


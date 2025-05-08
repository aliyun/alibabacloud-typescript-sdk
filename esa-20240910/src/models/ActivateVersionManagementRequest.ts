// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActivateVersionManagementRequest extends $dara.Model {
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](~~ListSites~~) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 11223***
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


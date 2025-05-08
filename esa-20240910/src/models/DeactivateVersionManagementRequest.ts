// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeactivateVersionManagementRequest extends $dara.Model {
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](~~ListSites~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890***
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


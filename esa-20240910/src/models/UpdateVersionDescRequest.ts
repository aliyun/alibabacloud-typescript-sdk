// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVersionDescRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the version.
   * 
   * This parameter is required.
   * 
   * @example
   * 更新版本。
   */
  description?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 134567****
   */
  siteId?: number;
  /**
   * @remarks
   * The version number to be updated.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEnvironmentVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the environment to update.
   * 
   * This parameter is required.
   * 
   * @example
   * 默认环境
   */
  environmentName?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 33970510651****
   */
  siteId?: number;
  /**
   * @remarks
   * The new site version number.
   * 
   * This parameter is required.
   * 
   * @example
   * 8
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      environmentName: 'EnvironmentName',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentName: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeEnvironmentVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The environment name. The version of this environment is upgraded and deployed to the environment with the next priority level.
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
   * 1245678****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      environmentName: 'EnvironmentName',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentName: 'string',
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


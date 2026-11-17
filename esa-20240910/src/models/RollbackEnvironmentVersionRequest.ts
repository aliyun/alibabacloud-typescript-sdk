// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackEnvironmentVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the environment.
   * 
   * This parameter is required.
   * 
   * @example
   * Default environment
   */
  environmentName?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to query the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 33862229675****
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


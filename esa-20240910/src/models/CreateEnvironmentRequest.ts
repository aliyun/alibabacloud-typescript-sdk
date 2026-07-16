// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnvironmentRequest extends $dara.Model {
  /**
   * @remarks
   * The environment name.
   * 
   * This parameter is required.
   * 
   * @example
   * NPDcP1
   */
  environmentName?: string;
  /**
   * @remarks
   * The name of the environment with the next priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 默认环境
   */
  nextEnvironmentName?: string;
  /**
   * @remarks
   * The environment rule.
   * 
   * This parameter is required.
   * 
   * @example
   * ("ip" eq "1.1.1.1")
   */
  rule?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123**
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      environmentName: 'EnvironmentName',
      nextEnvironmentName: 'NextEnvironmentName',
      rule: 'Rule',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentName: 'string',
      nextEnvironmentName: 'string',
      rule: 'string',
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


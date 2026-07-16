// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEnvironmentRequest extends $dara.Model {
  /**
   * @remarks
   * The environment name.
   * 
   * This parameter is required.
   * 
   * @example
   * 默认环境
   */
  environmentName?: string;
  /**
   * @remarks
   * The new environment name.
   * 
   * @example
   * 环境A
   */
  newName?: string;
  /**
   * @remarks
   * Specifies whether the environment is read-only.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The Wireshark rule.
   * 
   * This parameter is required.
   * 
   * @example
   * (http.host eq "duduko5.top")
   */
  rule?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 33993121955****
   */
  siteId?: number;
  /**
   * @remarks
   * The new site version number. Only the environment with the highest priority can be modified.
   * 
   * @example
   * 10
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      environmentName: 'EnvironmentName',
      newName: 'NewName',
      readOnly: 'ReadOnly',
      rule: 'Rule',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentName: 'string',
      newName: 'string',
      readOnly: 'boolean',
      rule: 'string',
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


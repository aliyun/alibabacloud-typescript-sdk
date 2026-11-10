// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEnvironmentRequest extends $dara.Model {
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
   * The new name of the environment.
   * 
   * @example
   * Environment A
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
   * The ID of the site. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 33993121955****
   */
  siteId?: number;
  /**
   * @remarks
   * The new version number of the site. You can modify this parameter only for the environment with the highest priority.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceInstanceResponseBodyServiceUpgradableServiceInfos extends $dara.Model {
  /**
   * @remarks
   * An upgradable service version.
   * 
   * @example
   * draft
   */
  version?: string;
  /**
   * @remarks
   * The version name of an upgradable service version.
   * 
   * @example
   * 0.1.0
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


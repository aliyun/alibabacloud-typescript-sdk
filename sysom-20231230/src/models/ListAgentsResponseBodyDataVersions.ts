// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentsResponseBodyDataVersions extends $dara.Model {
  createdAt?: string;
  installScript?: string;
  uninstallScript?: string;
  updatedAt?: string;
  upgradeScript?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      installScript: 'install_script',
      uninstallScript: 'uninstall_script',
      updatedAt: 'updated_at',
      upgradeScript: 'upgrade_script',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      installScript: 'string',
      uninstallScript: 'string',
      updatedAt: 'string',
      upgradeScript: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


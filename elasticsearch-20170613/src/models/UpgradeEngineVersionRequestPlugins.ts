// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeEngineVersionRequestPlugins extends $dara.Model {
  enable?: string;
  fileVersion?: string;
  name?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      fileVersion: 'fileVersion',
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
      fileVersion: 'string',
      name: 'string',
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


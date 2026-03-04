// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitContainerConfig extends $dara.Model {
  command?: string;
  commandArgs?: string;
  configMapMountDesc?: string;
  emptyDirDesc?: string;
  envs?: string;
  imageUrl?: string;
  name?: string;
  secretMountDesc?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      commandArgs: 'CommandArgs',
      configMapMountDesc: 'ConfigMapMountDesc',
      emptyDirDesc: 'EmptyDirDesc',
      envs: 'Envs',
      imageUrl: 'ImageUrl',
      name: 'Name',
      secretMountDesc: 'SecretMountDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      commandArgs: 'string',
      configMapMountDesc: 'string',
      emptyDirDesc: 'string',
      envs: 'string',
      imageUrl: 'string',
      name: 'string',
      secretMountDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


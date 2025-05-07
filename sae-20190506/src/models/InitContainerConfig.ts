// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitContainerConfig extends $dara.Model {
  command?: string;
  commandArgs?: string;
  configMapMountDesc?: string;
  envs?: string;
  imageUrl?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      commandArgs: 'CommandArgs',
      configMapMountDesc: 'ConfigMapMountDesc',
      envs: 'Envs',
      imageUrl: 'ImageUrl',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      commandArgs: 'string',
      configMapMountDesc: 'string',
      envs: 'string',
      imageUrl: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


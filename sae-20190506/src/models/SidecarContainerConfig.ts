// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SidecarContainerConfig extends $dara.Model {
  acrInstanceId?: string;
  command?: string;
  commandArgs?: string;
  configMapMountDesc?: string;
  cpu?: number;
  emptyDirDesc?: string;
  envs?: string;
  imageUrl?: string;
  memory?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      acrInstanceId: 'AcrInstanceId',
      command: 'Command',
      commandArgs: 'CommandArgs',
      configMapMountDesc: 'ConfigMapMountDesc',
      cpu: 'Cpu',
      emptyDirDesc: 'EmptyDirDesc',
      envs: 'Envs',
      imageUrl: 'ImageUrl',
      memory: 'Memory',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrInstanceId: 'string',
      command: 'string',
      commandArgs: 'string',
      configMapMountDesc: 'string',
      cpu: 'number',
      emptyDirDesc: 'string',
      envs: 'string',
      imageUrl: 'string',
      memory: 'number',
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


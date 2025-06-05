// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateContainerGroupRequestVolumeConfigFileVolumeConfigFileToPath } from "./CreateContainerGroupRequestVolumeConfigFileVolumeConfigFileToPath";


export class CreateContainerGroupRequestVolumeConfigFileVolume extends $dara.Model {
  configFileToPath?: CreateContainerGroupRequestVolumeConfigFileVolumeConfigFileToPath[];
  defaultMode?: number;
  static names(): { [key: string]: string } {
    return {
      configFileToPath: 'ConfigFileToPath',
      defaultMode: 'DefaultMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFileToPath: { 'type': 'array', 'itemType': CreateContainerGroupRequestVolumeConfigFileVolumeConfigFileToPath },
      defaultMode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configFileToPath)) {
      $dara.Model.validateArray(this.configFileToPath);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


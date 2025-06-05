// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateContainerGroupRequestVolumeConfigFileVolumeConfigFileToPath } from "./UpdateContainerGroupRequestVolumeConfigFileVolumeConfigFileToPath";


export class UpdateContainerGroupRequestVolumeConfigFileVolume extends $dara.Model {
  configFileToPath?: UpdateContainerGroupRequestVolumeConfigFileVolumeConfigFileToPath[];
  static names(): { [key: string]: string } {
    return {
      configFileToPath: 'ConfigFileToPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFileToPath: { 'type': 'array', 'itemType': UpdateContainerGroupRequestVolumeConfigFileVolumeConfigFileToPath },
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


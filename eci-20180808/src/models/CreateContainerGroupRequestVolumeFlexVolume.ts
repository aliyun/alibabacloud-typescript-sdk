// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContainerGroupRequestVolumeFlexVolume extends $dara.Model {
  driver?: string;
  fsType?: string;
  options?: string;
  static names(): { [key: string]: string } {
    return {
      driver: 'Driver',
      fsType: 'FsType',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driver: 'string',
      fsType: 'string',
      options: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


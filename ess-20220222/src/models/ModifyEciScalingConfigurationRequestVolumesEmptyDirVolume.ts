// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEciScalingConfigurationRequestVolumesEmptyDirVolume extends $dara.Model {
  medium?: string;
  sizeLimit?: string;
  static names(): { [key: string]: string } {
    return {
      medium: 'Medium',
      sizeLimit: 'SizeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      medium: 'string',
      sizeLimit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


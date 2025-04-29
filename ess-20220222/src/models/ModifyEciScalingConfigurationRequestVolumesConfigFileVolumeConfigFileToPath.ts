// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEciScalingConfigurationRequestVolumesConfigFileVolumeConfigFileToPath extends $dara.Model {
  /**
   * @remarks
   * The content of the configuration file (32 KB).
   * 
   * @example
   * bGl1bWk=
   */
  content?: string;
  /**
   * @remarks
   * The permissions on the ConfigFile volume.
   * 
   * @example
   * 0644
   */
  mode?: number;
  /**
   * @remarks
   * The relative path to the configuration file.
   * 
   * @example
   * /usr/bin/
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      mode: 'Mode',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      mode: 'number',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


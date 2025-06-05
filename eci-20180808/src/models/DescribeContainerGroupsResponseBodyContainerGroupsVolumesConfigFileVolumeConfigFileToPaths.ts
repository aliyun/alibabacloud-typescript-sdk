// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupsResponseBodyContainerGroupsVolumesConfigFileVolumeConfigFileToPaths extends $dara.Model {
  /**
   * @remarks
   * The content of the ConfigFile volume. Maximum size: 32 KB.
   * 
   * @example
   * hello world
   */
  content?: string;
  /**
   * @remarks
   * The relative path of the ConfigFile volume.
   * 
   * @example
   * /usr/bin/
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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


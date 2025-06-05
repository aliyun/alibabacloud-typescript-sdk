// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContainerGroupRequestVolumeConfigFileVolumeConfigFileToPath extends $dara.Model {
  content?: string;
  mode?: number;
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContainerGroupRequestVolumeConfigFileVolumeConfigFileToPath extends $dara.Model {
  content?: string;
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


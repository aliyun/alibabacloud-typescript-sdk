// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelFile extends $dara.Model {
  isDir?: boolean;
  modeTime?: number;
  name?: string;
  path?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      isDir: 'isDir',
      modeTime: 'modeTime',
      name: 'name',
      path: 'path',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDir: 'boolean',
      modeTime: 'number',
      name: 'string',
      path: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelFilePreview extends $dara.Model {
  content?: string;
  hash?: string;
  isCompressedImage?: boolean;
  isDir?: boolean;
  name?: string;
  path?: string;
  size?: number;
  unpreviewable?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      hash: 'hash',
      isCompressedImage: 'isCompressedImage',
      isDir: 'isDir',
      name: 'name',
      path: 'path',
      size: 'size',
      unpreviewable: 'unpreviewable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      hash: 'string',
      isCompressedImage: 'boolean',
      isDir: 'boolean',
      name: 'string',
      path: 'string',
      size: 'number',
      unpreviewable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStoryRequestCover extends $dara.Model {
  /**
   * @remarks
   * The URI of the cover image.
   * 
   * Specify the OSS URI in the oss://${Bucket}/${Object} format, where `${Bucket}` is the name of the bucket in the same region as the current project and `${Object}` is the path of the object with the extension included.
   * 
   * @example
   * oss://bucket1/object
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


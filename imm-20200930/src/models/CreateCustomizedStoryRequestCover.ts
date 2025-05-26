// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomizedStoryRequestCover extends $dara.Model {
  /**
   * @remarks
   * The URI of the cover image.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket1/cover
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


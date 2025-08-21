// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlbumDetailByIdRequest extends $dara.Model {
  /**
   * @example
   * 51999575
   */
  albumId?: string;
  static names(): { [key: string]: string } {
    return {
      albumId: 'AlbumId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


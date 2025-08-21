// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlbumRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12343
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * song
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


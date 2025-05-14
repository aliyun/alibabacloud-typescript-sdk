// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaToSearchLibRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * This parameter is required.
   * 
   * @example
   * ****019b82e24b37a1c2958dec38****
   */
  mediaId?: string;
  /**
   * @remarks
   * The message body.
   * 
   * This parameter is required.
   * 
   * @example
   * {}
   */
  msgBody?: string;
  /**
   * @remarks
   * The name of the search library. Default value: ims-default-search-lib.
   * 
   * @example
   * test1
   */
  searchLibName?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      msgBody: 'MsgBody',
      searchLibName: 'SearchLibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      msgBody: 'string',
      searchLibName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


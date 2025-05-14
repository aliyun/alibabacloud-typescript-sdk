// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchIndexJobRerunResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The media asset IDs that do not exist.
   */
  mediaIdsNoExist?: string[];
  static names(): { [key: string]: string } {
    return {
      mediaIdsNoExist: 'MediaIdsNoExist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaIdsNoExist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.mediaIdsNoExist)) {
      $dara.Model.validateArray(this.mediaIdsNoExist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


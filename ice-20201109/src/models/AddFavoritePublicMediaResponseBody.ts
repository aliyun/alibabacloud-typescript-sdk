// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFavoritePublicMediaResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of Media Asset IDs that were not added to your Favorites. This happens if a Media Asset does not exist or is already in your Favorites.
   */
  ignoredList?: string[];
  /**
   * @remarks
   * The Request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ignoredList: 'IgnoredList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoredList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ignoredList)) {
      $dara.Model.validateArray(this.ignoredList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


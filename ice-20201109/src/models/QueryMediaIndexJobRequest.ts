// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaIndexJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * This parameter is required.
   * 
   * @example
   * c2e77390f75271ec802f0674a2ce6***
   */
  mediaId?: string;
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
      searchLibName: 'SearchLibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
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


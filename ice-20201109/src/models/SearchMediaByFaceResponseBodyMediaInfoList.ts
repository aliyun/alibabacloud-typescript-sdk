// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaByFaceResponseBodyMediaInfoList extends $dara.Model {
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * 3b187b3620c8490886cfc2a9578c****
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


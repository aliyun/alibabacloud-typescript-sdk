// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreatePlayingListRequestOpenCreatePlayingListRequestContentList } from "./CreatePlayingListRequestOpenCreatePlayingListRequestContentList";


export class CreatePlayingListRequestOpenCreatePlayingListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contentList?: CreatePlayingListRequestOpenCreatePlayingListRequestContentList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * content
   */
  contentType?: string;
  /**
   * @example
   * {}
   */
  extendInfo?: { [key: string]: any };
  /**
   * @example
   * 1
   */
  index?: number;
  /**
   * @example
   * true
   */
  needAlbumContinued?: boolean;
  /**
   * @example
   * default
   */
  playFrom?: string;
  /**
   * @example
   * Normal
   */
  playMode?: string;
  static names(): { [key: string]: string } {
    return {
      contentList: 'ContentList',
      contentType: 'ContentType',
      extendInfo: 'ExtendInfo',
      index: 'Index',
      needAlbumContinued: 'NeedAlbumContinued',
      playFrom: 'PlayFrom',
      playMode: 'PlayMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentList: { 'type': 'array', 'itemType': CreatePlayingListRequestOpenCreatePlayingListRequestContentList },
      contentType: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      index: 'number',
      needAlbumContinued: 'boolean',
      playFrom: 'string',
      playMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contentList)) {
      $dara.Model.validateArray(this.contentList);
    }
    if(this.extendInfo) {
      $dara.Model.validateMap(this.extendInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


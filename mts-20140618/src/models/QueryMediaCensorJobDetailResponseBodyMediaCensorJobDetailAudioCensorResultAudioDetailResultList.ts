// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailAudioCensorResultAudioDetailResultListAudioDetailResult } from "./QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailAudioCensorResultAudioDetailResultListAudioDetailResult";


export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailAudioCensorResultAudioDetailResultList extends $dara.Model {
  audioDetailResult?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailAudioCensorResultAudioDetailResultListAudioDetailResult[];
  static names(): { [key: string]: string } {
    return {
      audioDetailResult: 'AudioDetailResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioDetailResult: { 'type': 'array', 'itemType': QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailAudioCensorResultAudioDetailResultListAudioDetailResult },
    };
  }

  validate() {
    if(Array.isArray(this.audioDetailResult)) {
      $dara.Model.validateArray(this.audioDetailResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


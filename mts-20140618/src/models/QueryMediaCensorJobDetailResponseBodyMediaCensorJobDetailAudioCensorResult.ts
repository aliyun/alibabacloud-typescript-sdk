// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailAudioCensorResultAudioDetailResultList } from "./QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailAudioCensorResultAudioDetailResultList";


export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailAudioCensorResult extends $dara.Model {
  audioDetailResultList?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailAudioCensorResultAudioDetailResultList;
  label?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      audioDetailResultList: 'AudioDetailResultList',
      label: 'Label',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioDetailResultList: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailAudioCensorResultAudioDetailResultList,
      label: 'string',
      suggestion: 'string',
    };
  }

  validate() {
    if(this.audioDetailResultList && typeof (this.audioDetailResultList as any).validate === 'function') {
      (this.audioDetailResultList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunHotTopicChatResponseBodyPayloadOutputMultimodalMedias extends $dara.Model {
  /**
   * @example
   * http://xxxx
   */
  fileUrl?: string;
  /**
   * @example
   * image
   */
  mediaType?: string;
  sortScore?: number;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'fileUrl',
      mediaType: 'mediaType',
      sortScore: 'sortScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      mediaType: 'string',
      sortScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


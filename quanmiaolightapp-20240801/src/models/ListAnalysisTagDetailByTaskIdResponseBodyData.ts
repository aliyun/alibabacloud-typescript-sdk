// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAnalysisTagDetailByTaskIdResponseBodyDataContentTags } from "./ListAnalysisTagDetailByTaskIdResponseBodyDataContentTags";


export class ListAnalysisTagDetailByTaskIdResponseBodyData extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  content?: string;
  contentTags?: ListAnalysisTagDetailByTaskIdResponseBodyDataContentTags[];
  originResponse?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentTags: 'contentTags',
      originResponse: 'originResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentTags: { 'type': 'array', 'itemType': ListAnalysisTagDetailByTaskIdResponseBodyDataContentTags },
      originResponse: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contentTags)) {
      $dara.Model.validateArray(this.contentTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


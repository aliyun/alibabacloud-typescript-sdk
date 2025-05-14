// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLiveTranscodeTemplatesResponseBodyTemplateContentList } from "./ListLiveTranscodeTemplatesResponseBodyTemplateContentList";


export class ListLiveTranscodeTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  /**
   * @remarks
   * The list of transcoding templates.
   */
  templateContentList?: ListLiveTranscodeTemplatesResponseBodyTemplateContentList[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateContentList: 'TemplateContentList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateContentList: { 'type': 'array', 'itemType': ListLiveTranscodeTemplatesResponseBodyTemplateContentList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.templateContentList)) {
      $dara.Model.validateArray(this.templateContentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


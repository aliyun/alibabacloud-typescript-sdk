// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudNotePhrasesResponseBodyPhrases } from "./DescribeCloudNotePhrasesResponseBodyPhrases";


export class DescribeCloudNotePhrasesResponseBody extends $dara.Model {
  phrases?: DescribeCloudNotePhrasesResponseBodyPhrases[];
  /**
   * @remarks
   * Id of the request。
   * 
   * @example
   * 3A26E1E3-3CBB-599E-AD68-CB78F5A42FA1
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      phrases: 'Phrases',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phrases: { 'type': 'array', 'itemType': DescribeCloudNotePhrasesResponseBodyPhrases },
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.phrases)) {
      $dara.Model.validateArray(this.phrases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryCloudRecordTextResponseBodyParagraphListSentenceList } from "./QueryCloudRecordTextResponseBodyParagraphListSentenceList";


export class QueryCloudRecordTextResponseBodyParagraphList extends $dara.Model {
  /**
   * @example
   * 7940
   */
  endTime?: number;
  /**
   * @example
   * 1631172045153000
   */
  nextTtoken?: number;
  /**
   * @example
   * 小钉
   */
  nickName?: string;
  /**
   * @example
   * 嘿！你好，这里是小钉
   */
  paragraph?: string;
  /**
   * @example
   * 44444
   */
  recordId?: number;
  sentenceList?: QueryCloudRecordTextResponseBodyParagraphListSentenceList[];
  /**
   * @example
   * 7940
   */
  startTime?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      nextTtoken: 'NextTtoken',
      nickName: 'NickName',
      paragraph: 'Paragraph',
      recordId: 'RecordId',
      sentenceList: 'SentenceList',
      startTime: 'StartTime',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      nextTtoken: 'number',
      nickName: 'string',
      paragraph: 'string',
      recordId: 'number',
      sentenceList: { 'type': 'array', 'itemType': QueryCloudRecordTextResponseBodyParagraphListSentenceList },
      startTime: 'number',
      status: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sentenceList)) {
      $dara.Model.validateArray(this.sentenceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


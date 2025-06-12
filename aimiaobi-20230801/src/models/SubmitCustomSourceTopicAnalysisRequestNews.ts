// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitCustomSourceTopicAnalysisRequestNewsComments } from "./SubmitCustomSourceTopicAnalysisRequestNewsComments";


export class SubmitCustomSourceTopicAnalysisRequestNews extends $dara.Model {
  comments?: SubmitCustomSourceTopicAnalysisRequestNewsComments[];
  content?: string;
  /**
   * @example
   * 2024-01-22 10:29:00
   */
  pubTime?: string;
  title?: string;
  /**
   * @example
   * http://www.example.com/xxx.html
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      content: 'Content',
      pubTime: 'PubTime',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: { 'type': 'array', 'itemType': SubmitCustomSourceTopicAnalysisRequestNewsComments },
      content: 'string',
      pubTime: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.comments)) {
      $dara.Model.validateArray(this.comments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


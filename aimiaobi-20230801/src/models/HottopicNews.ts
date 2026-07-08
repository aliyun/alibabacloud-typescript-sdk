// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HottopicNewsComments extends $dara.Model {
  /**
   * @remarks
   * News comment content
   * 
   * @example
   * 新闻评论内容
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HottopicNews extends $dara.Model {
  /**
   * @remarks
   * List of news comments
   */
  comments?: HottopicNewsComments[];
  /**
   * @remarks
   * News content
   * 
   * @example
   * 新闻内容xxx
   */
  content?: string;
  /**
   * @remarks
   * News title
   * 
   * @example
   * 新闻标题xxx
   */
  title?: string;
  /**
   * @remarks
   * News URL link
   * 
   * @example
   * http://www.example.com/xxx.html
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      content: 'Content',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: { 'type': 'array', 'itemType': HottopicNewsComments },
      content: 'string',
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


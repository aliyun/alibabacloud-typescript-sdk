// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCustomSourceTopicAnalysisRequestNewsComments extends $dara.Model {
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

export class SubmitCustomSourceTopicAnalysisRequestNews extends $dara.Model {
  comments?: SubmitCustomSourceTopicAnalysisRequestNewsComments[];
  content?: string;
  /**
   * @example
   * 2024-01-22 10:29:00
   */
  pubTime?: string;
  source?: string;
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
      source: 'Source',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: { 'type': 'array', 'itemType': SubmitCustomSourceTopicAnalysisRequestNewsComments },
      content: 'string',
      pubTime: 'string',
      source: 'string',
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

export class SubmitCustomSourceTopicAnalysisRequest extends $dara.Model {
  analysisTypes?: string[];
  /**
   * @example
   * json
   */
  fileType?: string;
  /**
   * @example
   * http://www.example.com/xxx.json
   */
  fileUrl?: string;
  /**
   * @example
   * 50
   */
  maxTopicSize?: number;
  news?: SubmitCustomSourceTopicAnalysisRequestNews[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisTypes: 'AnalysisTypes',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      maxTopicSize: 'MaxTopicSize',
      news: 'News',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisTypes: { 'type': 'array', 'itemType': 'string' },
      fileType: 'string',
      fileUrl: 'string',
      maxTopicSize: 'number',
      news: { 'type': 'array', 'itemType': SubmitCustomSourceTopicAnalysisRequestNews },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.analysisTypes)) {
      $dara.Model.validateArray(this.analysisTypes);
    }
    if(Array.isArray(this.news)) {
      $dara.Model.validateArray(this.news);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


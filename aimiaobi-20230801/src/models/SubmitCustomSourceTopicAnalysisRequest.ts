// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitCustomSourceTopicAnalysisRequestNews } from "./SubmitCustomSourceTopicAnalysisRequestNews";


export class SubmitCustomSourceTopicAnalysisRequest extends $dara.Model {
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
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      maxTopicSize: 'MaxTopicSize',
      news: 'News',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
      fileUrl: 'string',
      maxTopicSize: 'number',
      news: { 'type': 'array', 'itemType': SubmitCustomSourceTopicAnalysisRequestNews },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.news)) {
      $dara.Model.validateArray(this.news);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


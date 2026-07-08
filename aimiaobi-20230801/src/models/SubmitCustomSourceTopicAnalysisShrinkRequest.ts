// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCustomSourceTopicAnalysisShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The types of analysis for hot topic selection. Multiple values are supported. If you omit this parameter, the service analyzes all types by default. If you pass an empty array, the service performs only clustering and skips the analysis of hot topics for selection.
   * `HotViewPoints`: Analyzes perspectives on hot topics.
   * `WebReviewPoints`: Analyzes user viewpoints. This requires comments.
   * `TimedViewPoints`: Analyzes perspectives on timeliness.
   * `FreshViewPoints`: Analyzes novel perspectives.
   * `TopicSummary`: Summarizes news content.
   */
  analysisTypesShrink?: string;
  /**
   * @remarks
   * The file type. Valid values: `json` (JSON array) and `jsonLine` (JSON Lines).
   * 
   * @example
   * json
   */
  fileType?: string;
  /**
   * @remarks
   * The file URL. You must specify either `FileUrl` or `News`. For details on the file structure, see the description of the `News` parameter.
   * 
   * @example
   * http://www.example.com/xxx.json
   */
  fileUrl?: string;
  /**
   * @remarks
   * The maximum number of topics to analyze. By default, the service sorts clustered news by count in descending order and analyzes the top 50 topics. The maximum value is 200.
   * 
   * @example
   * 50
   */
  maxTopicSize?: number;
  /**
   * @remarks
   * A list of news articles. You must specify either `News` or `FileUrl`.
   */
  newsShrink?: string;
  /**
   * @remarks
   * A list of topics.
   */
  topicsShrink?: string;
  /**
   * @remarks
   * The URL of the file that contains the topic list. The file must be in JSON Lines format, with each line representing a single JSON object.
   * 
   * @example
   * http://www.example.com/xxx.jsonline
   */
  topicsFileUrl?: string;
  /**
   * @remarks
   * [The Model Studio workspace ID.](https://help.aliyun.com/document_detail/2782167.html)
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisTypesShrink: 'AnalysisTypes',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      maxTopicSize: 'MaxTopicSize',
      newsShrink: 'News',
      topicsShrink: 'Topics',
      topicsFileUrl: 'TopicsFileUrl',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisTypesShrink: 'string',
      fileType: 'string',
      fileUrl: 'string',
      maxTopicSize: 'number',
      newsShrink: 'string',
      topicsShrink: 'string',
      topicsFileUrl: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


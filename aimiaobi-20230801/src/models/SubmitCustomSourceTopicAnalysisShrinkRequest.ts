// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCustomSourceTopicAnalysisShrinkRequest extends $dara.Model {
  analysisTypesShrink?: string;
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
  newsShrink?: string;
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
      analysisTypesShrink: 'AnalysisTypes',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      maxTopicSize: 'MaxTopicSize',
      newsShrink: 'News',
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


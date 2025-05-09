// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AnalyzeGitRepositoryResponseBodyAnalysisResults } from "./AnalyzeGitRepositoryResponseBodyAnalysisResults";


export class AnalyzeGitRepositoryResponseBody extends $dara.Model {
  analysisResults?: AnalyzeGitRepositoryResponseBodyAnalysisResults[];
  count?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisResults: 'AnalysisResults',
      count: 'Count',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisResults: { 'type': 'array', 'itemType': AnalyzeGitRepositoryResponseBodyAnalysisResults },
      count: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.analysisResults)) {
      $dara.Model.validateArray(this.analysisResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


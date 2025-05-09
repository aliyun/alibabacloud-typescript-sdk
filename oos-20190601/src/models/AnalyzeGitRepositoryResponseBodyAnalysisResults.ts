// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AnalyzeGitRepositoryResponseBodyAnalysisResultsBuildFiles } from "./AnalyzeGitRepositoryResponseBodyAnalysisResultsBuildFiles";


export class AnalyzeGitRepositoryResponseBodyAnalysisResults extends $dara.Model {
  buildFiles?: AnalyzeGitRepositoryResponseBodyAnalysisResultsBuildFiles[];
  buildType?: string;
  runtimeType?: string;
  static names(): { [key: string]: string } {
    return {
      buildFiles: 'BuildFiles',
      buildType: 'BuildType',
      runtimeType: 'RuntimeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildFiles: { 'type': 'array', 'itemType': AnalyzeGitRepositoryResponseBodyAnalysisResultsBuildFiles },
      buildType: 'string',
      runtimeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.buildFiles)) {
      $dara.Model.validateArray(this.buildFiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


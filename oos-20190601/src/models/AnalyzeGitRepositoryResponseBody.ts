// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AnalyzeGitRepositoryResponseBodyAnalysisResultsBuildFiles extends $dara.Model {
  fileType?: string;
  paths?: string[];
  static names(): { [key: string]: string } {
    return {
      fileType: 'FileType',
      paths: 'Paths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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


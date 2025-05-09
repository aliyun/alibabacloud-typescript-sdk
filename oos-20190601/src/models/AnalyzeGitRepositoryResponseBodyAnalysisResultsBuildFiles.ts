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


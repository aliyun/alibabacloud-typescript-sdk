// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAnalysisTaskResultResponseBody extends $dara.Model {
  analysisId?: number;
  requestId?: string;
  resultJson?: string;
  static names(): { [key: string]: string } {
    return {
      analysisId: 'analysisId',
      requestId: 'requestId',
      resultJson: 'resultJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisId: 'number',
      requestId: 'string',
      resultJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


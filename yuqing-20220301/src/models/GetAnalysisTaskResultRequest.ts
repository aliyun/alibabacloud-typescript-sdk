// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAnalysisTaskResultRequest extends $dara.Model {
  analysisId?: number;
  requestId?: string;
  teamHashId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisId: 'analysisId',
      requestId: 'requestId',
      teamHashId: 'teamHashId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisId: 'number',
      requestId: 'string',
      teamHashId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


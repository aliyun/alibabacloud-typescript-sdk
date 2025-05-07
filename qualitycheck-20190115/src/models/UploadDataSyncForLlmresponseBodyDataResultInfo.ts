// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UploadDataSyncForLLMResponseBodyDataResultInfoRules } from "./UploadDataSyncForLlmresponseBodyDataResultInfoRules";


export class UploadDataSyncForLLMResponseBodyDataResultInfo extends $dara.Model {
  rules?: UploadDataSyncForLLMResponseBodyDataResultInfoRules;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      rules: 'Rules',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: UploadDataSyncForLLMResponseBodyDataResultInfoRules,
      score: 'number',
    };
  }

  validate() {
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


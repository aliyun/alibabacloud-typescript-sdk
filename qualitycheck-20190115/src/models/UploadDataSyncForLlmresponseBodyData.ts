// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UploadDataSyncForLLMResponseBodyDataResultInfo } from "./UploadDataSyncForLlmresponseBodyDataResultInfo";


export class UploadDataSyncForLLMResponseBodyData extends $dara.Model {
  resultInfo?: UploadDataSyncForLLMResponseBodyDataResultInfo[];
  static names(): { [key: string]: string } {
    return {
      resultInfo: 'ResultInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultInfo: { 'type': 'array', 'itemType': UploadDataSyncForLLMResponseBodyDataResultInfo },
    };
  }

  validate() {
    if(Array.isArray(this.resultInfo)) {
      $dara.Model.validateArray(this.resultInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySaasRecordNewResponseBodyListSaasRecord } from "./QuerySaasRecordNewResponseBodyListSaasRecord";


export class QuerySaasRecordNewResponseBodyList extends $dara.Model {
  saasRecord?: QuerySaasRecordNewResponseBodyListSaasRecord[];
  static names(): { [key: string]: string } {
    return {
      saasRecord: 'SaasRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saasRecord: { 'type': 'array', 'itemType': QuerySaasRecordNewResponseBodyListSaasRecord },
    };
  }

  validate() {
    if(Array.isArray(this.saasRecord)) {
      $dara.Model.validateArray(this.saasRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


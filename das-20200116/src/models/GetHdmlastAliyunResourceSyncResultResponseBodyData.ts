// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetHDMLastAliyunResourceSyncResultResponseBodyDataSubResults } from "./GetHdmlastAliyunResourceSyncResultResponseBodyDataSubResults";


export class GetHDMLastAliyunResourceSyncResultResponseBodyData extends $dara.Model {
  errorMsg?: string;
  results?: string;
  subResults?: GetHDMLastAliyunResourceSyncResultResponseBodyDataSubResults;
  syncStatus?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      results: 'Results',
      subResults: 'SubResults',
      syncStatus: 'SyncStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      results: 'string',
      subResults: GetHDMLastAliyunResourceSyncResultResponseBodyDataSubResults,
      syncStatus: 'string',
    };
  }

  validate() {
    if(this.subResults && typeof (this.subResults as any).validate === 'function') {
      (this.subResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


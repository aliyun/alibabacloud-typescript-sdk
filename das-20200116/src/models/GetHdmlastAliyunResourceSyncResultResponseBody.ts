// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHDMLastAliyunResourceSyncResultResponseBodyDataSubResultsResourceSyncSubResult extends $dara.Model {
  errMsg?: string;
  resourceType?: string;
  success?: boolean;
  syncCount?: number;
  static names(): { [key: string]: string } {
    return {
      errMsg: 'ErrMsg',
      resourceType: 'ResourceType',
      success: 'Success',
      syncCount: 'SyncCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMsg: 'string',
      resourceType: 'string',
      success: 'boolean',
      syncCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHDMLastAliyunResourceSyncResultResponseBodyDataSubResults extends $dara.Model {
  resourceSyncSubResult?: GetHDMLastAliyunResourceSyncResultResponseBodyDataSubResultsResourceSyncSubResult[];
  static names(): { [key: string]: string } {
    return {
      resourceSyncSubResult: 'ResourceSyncSubResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceSyncSubResult: { 'type': 'array', 'itemType': GetHDMLastAliyunResourceSyncResultResponseBodyDataSubResultsResourceSyncSubResult },
    };
  }

  validate() {
    if(Array.isArray(this.resourceSyncSubResult)) {
      $dara.Model.validateArray(this.resourceSyncSubResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetHDMLastAliyunResourceSyncResultResponseBody extends $dara.Model {
  code?: string;
  data?: GetHDMLastAliyunResourceSyncResultResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  synchro?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHDMLastAliyunResourceSyncResultResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
      synchro: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSyncStatusResponseBodySyncStatusList extends $dara.Model {
  checkpoint?: number;
  code?: string;
  delay?: number;
  jobId?: string;
  rate?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      code: 'Code',
      delay: 'Delay',
      jobId: 'JobId',
      rate: 'Rate',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'number',
      code: 'string',
      delay: 'number',
      jobId: 'string',
      rate: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncStatusResponseBody extends $dara.Model {
  dynamicCode?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  pageNumber?: number;
  requestId?: string;
  success?: boolean;
  syncStatusList?: DescribeSyncStatusResponseBodySyncStatusList[];
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      success: 'Success',
      syncStatusList: 'SyncStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      pageNumber: 'number',
      requestId: 'string',
      success: 'boolean',
      syncStatusList: { 'type': 'array', 'itemType': DescribeSyncStatusResponseBodySyncStatusList },
    };
  }

  validate() {
    if(Array.isArray(this.syncStatusList)) {
      $dara.Model.validateArray(this.syncStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


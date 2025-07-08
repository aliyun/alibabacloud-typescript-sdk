// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsSaasTaskDetailNewResponseBodyPhoneList } from "./QuerySmsSaasTaskDetailNewResponseBodyPhoneList";
import { QuerySmsSaasTaskDetailNewResponseBodySaasBaseCommParam } from "./QuerySmsSaasTaskDetailNewResponseBodySaasBaseCommParam";


export class QuerySmsSaasTaskDetailNewResponseBody extends $dara.Model {
  bizType?: string;
  detailDownloadUrl?: string;
  detailDownloadUrlForSuccess?: string;
  extParams?: string;
  failCount?: number;
  fireTime?: string;
  gmtCreate?: string;
  isDeleted?: boolean;
  isPermitOrder?: boolean;
  isPermitOrderForSuccess?: boolean;
  ossFilePath?: string;
  phoneList?: QuerySmsSaasTaskDetailNewResponseBodyPhoneList;
  requestId?: string;
  saasBaseCommParam?: QuerySmsSaasTaskDetailNewResponseBodySaasBaseCommParam;
  saasFileUrl?: string;
  scheduleType?: string;
  status?: string;
  successCount?: number;
  taskId?: number;
  taskInstanceId?: number;
  taskName?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      detailDownloadUrl: 'DetailDownloadUrl',
      detailDownloadUrlForSuccess: 'DetailDownloadUrlForSuccess',
      extParams: 'ExtParams',
      failCount: 'FailCount',
      fireTime: 'FireTime',
      gmtCreate: 'GmtCreate',
      isDeleted: 'IsDeleted',
      isPermitOrder: 'IsPermitOrder',
      isPermitOrderForSuccess: 'IsPermitOrderForSuccess',
      ossFilePath: 'OssFilePath',
      phoneList: 'PhoneList',
      requestId: 'RequestId',
      saasBaseCommParam: 'SaasBaseCommParam',
      saasFileUrl: 'SaasFileUrl',
      scheduleType: 'ScheduleType',
      status: 'Status',
      successCount: 'SuccessCount',
      taskId: 'TaskId',
      taskInstanceId: 'TaskInstanceId',
      taskName: 'TaskName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      detailDownloadUrl: 'string',
      detailDownloadUrlForSuccess: 'string',
      extParams: 'string',
      failCount: 'number',
      fireTime: 'string',
      gmtCreate: 'string',
      isDeleted: 'boolean',
      isPermitOrder: 'boolean',
      isPermitOrderForSuccess: 'boolean',
      ossFilePath: 'string',
      phoneList: QuerySmsSaasTaskDetailNewResponseBodyPhoneList,
      requestId: 'string',
      saasBaseCommParam: QuerySmsSaasTaskDetailNewResponseBodySaasBaseCommParam,
      saasFileUrl: 'string',
      scheduleType: 'string',
      status: 'string',
      successCount: 'number',
      taskId: 'number',
      taskInstanceId: 'number',
      taskName: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.phoneList && typeof (this.phoneList as any).validate === 'function') {
      (this.phoneList as any).validate();
    }
    if(this.saasBaseCommParam && typeof (this.saasBaseCommParam as any).validate === 'function') {
      (this.saasBaseCommParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsSaasTaskListNewResponseBodyListFcSaasTaskDTOCommParams } from "./QuerySmsSaasTaskListNewResponseBodyListFcSaasTaskDtocommParams";


export class QuerySmsSaasTaskListNewResponseBodyListFcSaasTaskDTO extends $dara.Model {
  bizType?: string;
  commParams?: QuerySmsSaasTaskListNewResponseBodyListFcSaasTaskDTOCommParams;
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
      commParams: 'CommParams',
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
      commParams: QuerySmsSaasTaskListNewResponseBodyListFcSaasTaskDTOCommParams,
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
    if(this.commParams && typeof (this.commParams as any).validate === 'function') {
      (this.commParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


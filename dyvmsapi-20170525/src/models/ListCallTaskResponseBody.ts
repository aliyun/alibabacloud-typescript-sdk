// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The type of the task template. Valid values:
   * 
   * *   **VMS_VOICE_TTS**: the TTS notification template.
   * *   **VMS_VOICE_CODE**: the voice notification template.
   * *   **VMS_TTS**: the voice verification code template.
   * 
   * @example
   * VMS_VOICE_TTS
   */
  bizType?: string;
  /**
   * @remarks
   * The time when the task was completed. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1614330986000
   */
  completeTime?: string;
  /**
   * @remarks
   * The number of tasks that were complete.
   * 
   * @example
   * 2
   */
  completedCount?: number;
  /**
   * @remarks
   * The task progress.
   * 
   * @example
   * 26%
   */
  completedRate?: number;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * 1
   */
  data?: string;
  /**
   * @remarks
   * The type of the called number.
   * 
   * @example
   * LIST
   */
  dataType?: string;
  /**
   * @remarks
   * The time when the scheduled task was started. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1614330978000
   */
  fireTime?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 123879546214
   */
  id?: number;
  /**
   * @remarks
   * The calling number.
   * 
   * @example
   * 0571000****
   */
  resource?: string;
  /**
   * @remarks
   * The task state. Valid values:
   * 
   * *   **INIT**: The task was in the initial state.
   * *   **RELEASE**: The task was being parsed.
   * *   **RUNNING**: The task was running.
   * *   **STOP**: The task was manually suspended.
   * *   **SYSTEM_STOP**: The task was suspended by the system.
   * *   **CANCEL**: The task was manually canceled.
   * *   **SYSTEM_CANCEL**: The task was canceled by the system.
   * *   **DONE**: The task was complete.
   * 
   * @example
   * DONE
   */
  status?: string;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * 1
   */
  stopTime?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * Aliyun
   */
  taskName?: string;
  /**
   * @remarks
   * The ID of the voice template.
   * 
   * @example
   * TTS_2100****
   */
  templateCode?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Test Template
   */
  templateName?: string;
  /**
   * @remarks
   * The total number of called numbers.
   * 
   * @example
   * 600
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      completeTime: 'CompleteTime',
      completedCount: 'CompletedCount',
      completedRate: 'CompletedRate',
      data: 'Data',
      dataType: 'DataType',
      fireTime: 'FireTime',
      id: 'Id',
      resource: 'Resource',
      status: 'Status',
      stopTime: 'StopTime',
      taskName: 'TaskName',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      completeTime: 'string',
      completedCount: 'number',
      completedRate: 'number',
      data: 'string',
      dataType: 'string',
      fireTime: 'string',
      id: 'number',
      resource: 'string',
      status: 'string',
      stopTime: 'string',
      taskName: 'string',
      templateCode: 'string',
      templateName: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The task information.
   */
  data?: ListCallTaskResponseBodyData[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5B0F201F-DCDA-45C2-AA92-1AE177F94991
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCallTaskResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


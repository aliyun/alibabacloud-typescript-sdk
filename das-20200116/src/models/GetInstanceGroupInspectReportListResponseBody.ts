// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceGroupInspectReportListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created, in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2025-12-11 00:39:00
   */
  createTime?: string;
  /**
   * @remarks
   * The date of diagnosis, in the YYYY-MM-DD format.
   * 
   * @example
   * 2025-12-10
   */
  reportDate?: string;
  /**
   * @remarks
   * The ID of the report.
   * 
   * @example
   * 13f52040-5a6e-42c3-bb84-051f5d6d****
   */
  reportId?: string;
  /**
   * @remarks
   * The status of the task. Valid values: WAITING_UNREADY = 0, WAITING_READY = 1, PROCESSING = 2, FINISHED = 3, ERROR = 4, and STOPPED = -1.
   * 
   * @example
   * 3
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      reportDate: 'ReportDate',
      reportId: 'ReportId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      reportDate: 'string',
      reportId: 'string',
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

export class GetInstanceGroupInspectReportListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * List<ReportStatus>
   */
  data?: GetInstanceGroupInspectReportListResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * >If the request is successful, **Successful** is returned. If the request fails, an exception message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * * **true**: The request was successful.
   * * **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetInstanceGroupInspectReportListResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceGroupInspectReportListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2025-12-11 00:39:00
   */
  createTime?: string;
  /**
   * @example
   * 2025-12-10
   */
  reportDate?: string;
  /**
   * @example
   * 13f52040-5a6e-42c3-bb84-051f5d6d****
   */
  reportId?: string;
  /**
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
   * @example
   * Successful
   */
  message?: string;
  /**
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
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


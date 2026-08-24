// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceGroupInspectReportDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The content of the automated operations report, including the report date and diagnostic details of managed instances.
   * 
   * @example
   * "### 概要\\n\\n报告日期：2025-12-10  \\n对比周期：[昨日日期] → 2025-12-10 以下省略"
   */
  reportDetail?: string;
  /**
   * @remarks
   * The report ID.
   * 
   * @example
   * 13f52040-5a6e-42c3-bb84-051f5d6d****
   */
  reportId?: string;
  static names(): { [key: string]: string } {
    return {
      reportDetail: 'ReportDetail',
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportDetail: 'string',
      reportId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceGroupInspectReportDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * ReportDetail
   */
  data?: GetInstanceGroupInspectReportDetailResponseBodyData;
  /**
   * @remarks
   * The message returned for the request.
   * 
   * > If the request is successful, **Successful** is returned. If the request fails, exception information such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * * true: The request is successful.
   * * false: The request fails.
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
      data: GetInstanceGroupInspectReportDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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


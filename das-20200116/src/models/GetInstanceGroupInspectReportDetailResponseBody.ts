// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceGroupInspectReportDetailResponseBodyData extends $dara.Model {
  reportDetail?: string;
  /**
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


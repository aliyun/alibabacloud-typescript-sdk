// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInspectionTaskReportResponseBodyDataSummary extends $dara.Model {
  /**
   * @remarks
   * The number of high-risk items.
   * 
   * @example
   * 0
   */
  error?: number;
  /**
   * @remarks
   * The number of failed items.
   * 
   * @example
   * 0
   */
  failed?: number;
  /**
   * @remarks
   * The number of normal items.
   * 
   * @example
   * 1
   */
  normal?: number;
  /**
   * @remarks
   * The number of warning items.
   * 
   * @example
   * 0
   */
  warning?: number;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      failed: 'Failed',
      normal: 'Normal',
      warning: 'Warning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'number',
      failed: 'number',
      normal: 'number',
      warning: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInspectionTaskReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of associated instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The Markdown text of the report details.
   * 
   * @example
   * # Tair Intelligent Inspection Report\\n\\n## Overview..
   */
  markdownText?: string;
  /**
   * @remarks
   * The report language.
   * 
   * @example
   * zh-CN
   */
  reportLanguage?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * SUCCEEDED
   */
  status?: string;
  /**
   * @remarks
   * The summary.
   */
  summary?: DescribeInspectionTaskReportResponseBodyDataSummary;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * tit-dca42f85c73644e0ab5c80ef6412xxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      markdownText: 'MarkdownText',
      reportLanguage: 'ReportLanguage',
      status: 'Status',
      summary: 'Summary',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      markdownText: 'string',
      reportLanguage: 'string',
      status: 'string',
      summary: DescribeInspectionTaskReportResponseBodyDataSummary,
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInspectionTaskReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task report.
   */
  data?: DescribeInspectionTaskReportResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 561AFBF1-BE20-44DB-9BD1-6988B53E****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeInspectionTaskReportResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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


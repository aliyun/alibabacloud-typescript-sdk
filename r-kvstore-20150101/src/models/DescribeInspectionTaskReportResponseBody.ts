// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInspectionTaskReportResponseBodyDataSummary extends $dara.Model {
  /**
   * @example
   * 0
   */
  error?: number;
  /**
   * @example
   * 0
   */
  failed?: number;
  /**
   * @example
   * 1
   */
  normal?: number;
  /**
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
  instanceIds?: string[];
  /**
   * @example
   * # Tair 智能巡检报告\\n\\n## 总览...
   */
  markdownText?: string;
  /**
   * @example
   * zh-CN
   */
  reportLanguage?: string;
  /**
   * @example
   * SUCCEEDED
   */
  status?: string;
  summary?: DescribeInspectionTaskReportResponseBodyDataSummary;
  /**
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
  data?: DescribeInspectionTaskReportResponseBodyData;
  /**
   * @example
   * 561AFBF1-BE20-44DB-9BD1-6988B53E****
   */
  requestId?: string;
  /**
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


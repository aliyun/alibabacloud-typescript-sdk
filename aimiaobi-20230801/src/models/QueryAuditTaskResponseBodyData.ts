// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAuditTaskResponseBodyDataResponse } from "./QueryAuditTaskResponseBodyDataResponse";


export class QueryAuditTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2025-05-13 12:12:12
   */
  auditTime?: string;
  /**
   * @example
   * 审核时的原文
   */
  content?: string;
  htmlContent?: string;
  response?: QueryAuditTaskResponseBodyDataResponse;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * 1
   */
  taskStatus?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      auditTime: 'AuditTime',
      content: 'Content',
      htmlContent: 'HtmlContent',
      response: 'Response',
      status: 'Status',
      taskStatus: 'TaskStatus',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditTime: 'string',
      content: 'string',
      htmlContent: 'string',
      response: QueryAuditTaskResponseBodyDataResponse,
      status: 'string',
      taskStatus: 'number',
      title: 'string',
    };
  }

  validate() {
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImAuditResponseBodyTextResultsResultResults } from "./ImAuditResponseBodyTextResultsResultResults";


export class ImAuditResponseBodyTextResultsResult extends $dara.Model {
  /**
   * @remarks
   * The error code. The error code is the same as the HTTP status code. For more information, see [Error codes](https://help.aliyun.com/document_detail/29254.html).
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The text that you specify in the moderation request.
   * 
   * @example
   * This is test text.
   */
  content?: string;
  /**
   * @remarks
   * The sequence number of the text.
   * 
   * @example
   * cfd33235-71a4-468b-8137-a5ffe323****
   */
  dataId?: string;
  /**
   * @remarks
   * The message that is returned for the request.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * The returned data. If the HTTP status code 200 is returned, the array in the returned results contains one or more elements. Each element is a struct.
   */
  results?: ImAuditResponseBodyTextResultsResultResults[];
  /**
   * @remarks
   * The ID of the moderation task.
   * 
   * @example
   * txt6HB8NQoEbU@5fosnj2xVEM-1t****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      content: 'content',
      dataId: 'dataId',
      msg: 'msg',
      results: 'results',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      content: 'string',
      dataId: 'string',
      msg: 'string',
      results: { 'type': 'array', 'itemType': ImAuditResponseBodyTextResultsResultResults },
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


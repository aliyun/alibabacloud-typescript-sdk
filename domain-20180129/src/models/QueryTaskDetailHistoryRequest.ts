// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskDetailHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * Domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Domain name cursor.
   * 
   * @example
   * example.com
   */
  domainNameCursor?: string;
  /**
   * @remarks
   * Language of error messages returned by the API. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Page size.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * Task detail cursor.
   * 
   * @example
   * 75addb07-28a3-450e-b5ec
   */
  taskDetailNoCursor?: string;
  /**
   * @remarks
   * Job number.
   * 
   * > You can obtain the job number by calling the [QueryTaskList](https://help.aliyun.com/document_detail/67709.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 75addb07-28a3-450e-b5ec-test
   */
  taskNo?: string;
  /**
   * @remarks
   * Job status. Valid values:
   * - **0**: Waiting to execute.
   * - **1**: Executing.
   * - **2**: Succeeded.
   * - **3**: Failed.
   * 
   * @example
   * 0
   */
  taskStatus?: number;
  /**
   * @remarks
   * User IP address.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainNameCursor: 'DomainNameCursor',
      lang: 'Lang',
      pageSize: 'PageSize',
      taskDetailNoCursor: 'TaskDetailNoCursor',
      taskNo: 'TaskNo',
      taskStatus: 'TaskStatus',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainNameCursor: 'string',
      lang: 'string',
      pageSize: 'number',
      taskDetailNoCursor: 'string',
      taskNo: 'string',
      taskStatus: 'number',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


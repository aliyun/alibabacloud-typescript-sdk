// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskDetailHistoryRequest extends $dara.Model {
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * example.com
   */
  domainNameCursor?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * 75addb07-28a3-450e-b5ec
   */
  taskDetailNoCursor?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 75addb07-28a3-450e-b5ec-test
   */
  taskNo?: string;
  /**
   * @example
   * 0
   */
  taskStatus?: number;
  /**
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


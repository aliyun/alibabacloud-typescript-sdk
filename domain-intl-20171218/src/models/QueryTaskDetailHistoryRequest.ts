// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskDetailHistoryRequest extends $dara.Model {
  domainName?: string;
  domainNameCursor?: string;
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  taskDetailNoCursor?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskNo?: string;
  taskStatus?: number;
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


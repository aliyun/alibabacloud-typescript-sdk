// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskDetailListRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The domain name instance ID.
   * 
   * > You can call <props="china">[QueryDomainByDomainName](https://help.aliyun.com/document_detail/442021.html)<props="intl">[QueryDomainByDomainName](https://help.aliyun.com/document_detail/121704.html) to query the domain name instance ID.
   * 
   * @example
   * S20179H1BBI9test
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the error message returned by the operation. Valid values:
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
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **1000**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The task number. This is the TaskNo value returned by a successfully executed task.
   * 
   * This parameter is required.
   * 
   * @example
   * 75addb07-28a3-450e-b5ec-test
   */
  taskNo?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - **0**: Waiting to be executed.
   * - **1**: Executing.
   * - **2**: Successful.
   * - **3**: Failed.
   * 
   * @example
   * 2
   */
  taskStatus?: number;
  /**
   * @remarks
   * The user IP address. You can set this parameter to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.0
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      lang: 'Lang',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      taskNo: 'TaskNo',
      taskStatus: 'TaskStatus',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      instanceId: 'string',
      lang: 'string',
      pageNum: 'number',
      pageSize: 'number',
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


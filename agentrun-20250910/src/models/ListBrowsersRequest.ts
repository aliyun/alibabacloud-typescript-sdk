// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBrowsersRequest extends $dara.Model {
  /**
   * @remarks
   * 根据浏览器实例名称进行模糊匹配过滤
   * 
   * @example
   * browser
   */
  browserName?: string;
  /**
   * @remarks
   * 当前页码，从1开始计数
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * 每页返回的记录数量
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * 根据浏览器实例的运行状态进行过滤，可选值：CREATING、READY、DELETING等
   * 
   * @example
   * CREATING
   * 
   * **if can be null:**
   * true
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      browserName: 'browserName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


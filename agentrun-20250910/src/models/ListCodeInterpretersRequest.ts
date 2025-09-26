// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCodeInterpretersRequest extends $dara.Model {
  /**
   * @remarks
   * 根据代码解释器实例名称进行模糊匹配过滤
   * 
   * @example
   * code
   */
  codeInterpreterName?: string;
  /**
   * @remarks
   * 当前页码，从1开始计数
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 每页返回的记录数量
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      codeInterpreterName: 'codeInterpreterName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeInterpreterName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


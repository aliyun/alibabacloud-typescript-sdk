// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplatesRequest extends $dara.Model {
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 按模板类型过滤
   * 
   * @example
   * Browser
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      templateType: 'templateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


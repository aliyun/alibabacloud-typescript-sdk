// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAclCheckRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 132
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageNo: 'number',
      pageSize: 'number',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


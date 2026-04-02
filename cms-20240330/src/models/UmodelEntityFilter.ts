// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UmodelEntityFilter extends $dara.Model {
  /**
   * @remarks
   * 过滤字段名
   */
  field?: string;
  /**
   * @remarks
   * 过滤操作符，仅支持 = 或 !=
   */
  operator?: string;
  /**
   * @remarks
   * 过滤值
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'field',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UmodelLabelFilter extends $dara.Model {
  /**
   * @remarks
   * 标签名
   */
  name?: string;
  /**
   * @remarks
   * 标签过滤操作符，仅支持 = 或 !=
   */
  operator?: string;
  /**
   * @remarks
   * 标签值
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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


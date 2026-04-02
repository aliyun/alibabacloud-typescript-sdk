// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UmodelEntityField extends $dara.Model {
  /**
   * @remarks
   * 实体字段名
   */
  field?: string;
  /**
   * @remarks
   * 字段别名或展示值
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'field',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
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


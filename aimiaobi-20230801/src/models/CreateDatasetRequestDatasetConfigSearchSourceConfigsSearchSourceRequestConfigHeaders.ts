// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders extends $dara.Model {
  /**
   * @example
   * 参数名称
   */
  name?: string;
  /**
   * @example
   * 参数值
   */
  value?: string;
  /**
   * @example
   * valueType = time 时有效
   */
  valueFormat?: string;
  /**
   * @example
   * 参数值数据类型: 默认string
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
      valueFormat: 'ValueFormat',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
      valueFormat: 'string',
      valueType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


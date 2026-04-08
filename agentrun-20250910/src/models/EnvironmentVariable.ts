// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnvironmentVariable extends $dara.Model {
  /**
   * @remarks
   * 环境变量的描述信息
   * 
   * @example
   * A configuration key
   */
  description?: string;
  /**
   * @remarks
   * 环境变量的名称
   * 
   * This parameter is required.
   * 
   * @example
   * MY_KEY
   */
  name?: string;
  /**
   * @remarks
   * 环境变量的值
   * 
   * This parameter is required.
   * 
   * @example
   * my-value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
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


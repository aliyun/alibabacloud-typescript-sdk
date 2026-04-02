// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApmFilterConfig extends $dara.Model {
  /**
   * @remarks
   * 维度键
   * 
   * This parameter is required.
   */
  key?: string;
  /**
   * @remarks
   * 过滤类型
   * 
   * This parameter is required.
   */
  type?: string;
  /**
   * @remarks
   * 过滤值（type 为 ALL/DISABLED 时可为空）
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      type: 'string',
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


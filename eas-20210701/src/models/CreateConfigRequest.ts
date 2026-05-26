// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConfigRequest extends $dara.Model {
  /**
   * @remarks
   * 配置值
   * 
   * @example
   * {"model": "gpt-4"}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartCodeInterpreterSessionInput extends $dara.Model {
  /**
   * @remarks
   * 代码解释器会话的名称，用于标识和区分不同的会话实例
   * 
   * **if can be null:**
   * true
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


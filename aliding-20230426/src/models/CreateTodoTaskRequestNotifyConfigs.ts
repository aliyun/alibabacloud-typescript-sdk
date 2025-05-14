// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTodoTaskRequestNotifyConfigs extends $dara.Model {
  /**
   * @example
   * 1
   */
  dingNotify?: string;
  static names(): { [key: string]: string } {
    return {
      dingNotify: 'dingNotify',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingNotify: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


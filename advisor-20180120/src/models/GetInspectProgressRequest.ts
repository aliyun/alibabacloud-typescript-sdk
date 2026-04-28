// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInspectProgressRequest extends $dara.Model {
  /**
   * @example
   * 14********37
   */
  assumeAliyunId?: number;
  /**
   * @example
   * 95***135
   */
  taskId?: number;
  /**
   * @example
   * ***
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      assumeAliyunId: 'AssumeAliyunId',
      taskId: 'TaskId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeAliyunId: 'number',
      taskId: 'number',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


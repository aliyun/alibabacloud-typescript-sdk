// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTlogTaskInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 233588686
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * android
   */
  os?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WXAIGCOYIQELGKLAL6IFXECD4B
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      os: 'Os',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      os: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPackSceneTaskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hjsyuyiuwe7wehg****
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * download
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


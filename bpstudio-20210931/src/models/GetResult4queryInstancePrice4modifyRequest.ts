// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResult4QueryInstancePrice4ModifyRequest extends $dara.Model {
  /**
   * @example
   * 02S7UU41WKJL7ERR
   */
  applicationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 58d5d8c5b5489150417a7cd6caa614bb
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
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


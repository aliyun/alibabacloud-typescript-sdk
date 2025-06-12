// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManualModerationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The value of dataId passed during the API request. This field will not be present if it was not provided during the request.
   * 
   * @example
   * 2a5389eb-4ff8-4584-ac99-644e2a539aa1
   */
  dataId?: string;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
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


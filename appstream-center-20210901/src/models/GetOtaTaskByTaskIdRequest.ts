// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOtaTaskByTaskIdRequest extends $dara.Model {
  /**
   * @remarks
   * The over-the-air update task ID. You can call [ListAppInstanceGroup](https://help.aliyun.com/document_detail/428506.html) to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ota-be7jzm29wrrz5****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


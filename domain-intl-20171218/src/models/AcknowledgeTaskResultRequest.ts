// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AcknowledgeTaskResultRequest extends $dara.Model {
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskDetailNo?: string[];
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      taskDetailNo: 'TaskDetailNo',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      taskDetailNo: { 'type': 'array', 'itemType': 'string' },
      userClientIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.taskDetailNo)) {
      $dara.Model.validateArray(this.taskDetailNo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


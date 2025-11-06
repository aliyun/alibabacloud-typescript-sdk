// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AcknowledgeTaskResultRequest extends $dara.Model {
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2659c29493e94416b297a7691340ccc4
   */
  taskDetailNo?: string[];
  /**
   * @example
   * 127.0.0.1
   */
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


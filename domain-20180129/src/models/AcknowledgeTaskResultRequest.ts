// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AcknowledgeTaskResultRequest extends $dara.Model {
  /**
   * @remarks
   * Language of the error message returned by the API. Valid values:
   * - **zh**: Chinese;
   * - **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * List of task detail numbers.
   * 
   * This parameter is required.
   * 
   * @example
   * 2659c29493e94416b297a7691340ccc4
   */
  taskDetailNo?: string[];
  /**
   * @remarks
   * User IP address.
   * 
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


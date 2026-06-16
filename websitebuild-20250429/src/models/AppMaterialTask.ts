// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppMaterialTask extends $dara.Model {
  /**
   * @remarks
   * The task completion time.
   * 
   * @example
   * 2025-12-26 11:30:05
   */
  completeTime?: string;
  /**
   * @remarks
   * The display format of the completion time.
   * 
   * @example
   * 1分钟前
   */
  completeTimeFormat?: string;
  /**
   * @remarks
   * The failure reason.
   * 
   * @example
   * 参数不合规
   */
  failReason?: string;
  /**
   * @remarks
   * The list of final files.
   */
  finalFileUrls?: string[];
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The task substatus.
   * 
   * @example
   * PENDING
   */
  subStatus?: string;
  /**
   * @remarks
   * The submit time.
   * 
   * @example
   * 2025-12-26 11:30:05
   */
  submitTime?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 81d04d62c3483b32bacf1d306d2622b2
   */
  taskId?: string;
  /**
   * @remarks
   * The task parameter.
   * 
   * @example
   * {
   *     "brandName": "品牌名称",
   *     "direction": "HORIZONTAL",
   *     "userPrompt": "设计要求"
   * }
   */
  taskParam?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * IMAGE_LOGO
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      completeTimeFormat: 'CompleteTimeFormat',
      failReason: 'FailReason',
      finalFileUrls: 'FinalFileUrls',
      status: 'Status',
      subStatus: 'SubStatus',
      submitTime: 'SubmitTime',
      taskId: 'TaskId',
      taskParam: 'TaskParam',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'string',
      completeTimeFormat: 'string',
      failReason: 'string',
      finalFileUrls: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      subStatus: 'string',
      submitTime: 'string',
      taskId: 'string',
      taskParam: 'string',
      taskType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.finalFileUrls)) {
      $dara.Model.validateArray(this.finalFileUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


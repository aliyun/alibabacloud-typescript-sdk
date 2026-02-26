// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppMaterialTask extends $dara.Model {
  /**
   * @example
   * 2025-12-26 11:30:05
   */
  completeTime?: string;
  completeTimeFormat?: string;
  failReason?: string;
  finalFileUrls?: string[];
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * PENDING
   */
  subStatus?: string;
  /**
   * @example
   * 2025-12-26 11:30:05
   */
  submitTime?: string;
  /**
   * @example
   * 81d04d62c3483b32bacf1d306d2622b2
   */
  taskId?: string;
  taskParam?: string;
  /**
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitReviewInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace ID
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * The complete JSON string information. See the following details for specific content.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "taskId": "任务ID",
   *     "vid": "文件ID"
   * }
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResultToReviewRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace ID.
   * 
   * @example
   * 12345
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * Full JSON string. See the detailed description below.
   * 
   * This parameter is required.
   * 
   * @example
   * {"taskId":"任务ID",“ fileId”:"文件ID"}
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


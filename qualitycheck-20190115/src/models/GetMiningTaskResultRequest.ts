// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMiningTaskResultRequest extends $dara.Model {
  /**
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24***
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
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


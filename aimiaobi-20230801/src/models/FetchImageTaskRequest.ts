// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FetchImageTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cd327c3d5d5e44159cc716e23bfa530e_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e1be065b-adc3-435e-bd01-1c18c5ed75d3
   */
  articleTaskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["9d8c9185-3f75-4a20-aca1-c5bb53dd97b3"]
   */
  taskIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      articleTaskId: 'ArticleTaskId',
      taskIdList: 'TaskIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      articleTaskId: 'string',
      taskIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.taskIdList)) {
      $dara.Model.validateArray(this.taskIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


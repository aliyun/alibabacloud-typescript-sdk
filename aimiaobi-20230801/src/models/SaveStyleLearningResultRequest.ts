// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveStyleLearningResultRequest extends $dara.Model {
  /**
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  aigcResult?: string;
  customTextIdList?: number[];
  materialIdList?: number[];
  rewriteResult?: string;
  styleName?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      aigcResult: 'AigcResult',
      customTextIdList: 'CustomTextIdList',
      materialIdList: 'MaterialIdList',
      rewriteResult: 'RewriteResult',
      styleName: 'StyleName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      aigcResult: 'string',
      customTextIdList: { 'type': 'array', 'itemType': 'number' },
      materialIdList: { 'type': 'array', 'itemType': 'number' },
      rewriteResult: 'string',
      styleName: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customTextIdList)) {
      $dara.Model.validateArray(this.customTextIdList);
    }
    if(Array.isArray(this.materialIdList)) {
      $dara.Model.validateArray(this.materialIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


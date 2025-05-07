// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveStyleLearningResultShrinkRequest extends $dara.Model {
  /**
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  aigcResult?: string;
  customTextIdListShrink?: string;
  materialIdListShrink?: string;
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
      customTextIdListShrink: 'CustomTextIdList',
      materialIdListShrink: 'MaterialIdList',
      rewriteResult: 'RewriteResult',
      styleName: 'StyleName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      aigcResult: 'string',
      customTextIdListShrink: 'string',
      materialIdListShrink: 'string',
      rewriteResult: 'string',
      styleName: 'string',
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


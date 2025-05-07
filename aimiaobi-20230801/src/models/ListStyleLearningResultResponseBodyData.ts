// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStyleLearningResultResponseBodyData extends $dara.Model {
  /**
   * @example
   * AIGC 生成的内容
   */
  aigcResult?: string;
  /**
   * @example
   * 70
   */
  id?: number;
  /**
   * @example
   * 用户修订后内容
   */
  rewriteResult?: string;
  /**
   * @example
   * 文体风格名称
   */
  styleName?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      aigcResult: 'AigcResult',
      id: 'Id',
      rewriteResult: 'RewriteResult',
      styleName: 'StyleName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aigcResult: 'string',
      id: 'number',
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


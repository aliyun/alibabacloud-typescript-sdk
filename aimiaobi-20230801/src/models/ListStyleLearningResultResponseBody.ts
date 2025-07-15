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

export class ListStyleLearningResultResponseBody extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  data?: ListStyleLearningResultResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': ListStyleLearningResultResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchModelErrorDTO extends $dara.Model {
  /**
   * @example
   * 模型类型不能为空
   */
  errorMsg?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * qwen-max
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'errorMsg',
      modelId: 'modelId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      modelId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


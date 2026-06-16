// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExistSceneRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The scenario name.
   * 
   * @example
   * 样本调度
   */
  sceneName?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sceneName: 'SceneName',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sceneName: 'string',
      regId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


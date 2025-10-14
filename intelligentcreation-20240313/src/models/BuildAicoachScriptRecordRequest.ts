// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuildAICoachScriptRecordRequest extends $dara.Model {
  /**
   * @example
   * https://yic-pre.oss-cn-hangzhou.aliyuncs.com/0922test/%E6%B5%8B%E8%AF%95%E5%89%A7%E6%9C%AC0925-%E5%9B%BA%E5%AE%9A%E9%97%AE%E7%AD%94%202.json
   */
  scriptJsonUrl?: string;
  static names(): { [key: string]: string } {
    return {
      scriptJsonUrl: 'scriptJsonUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scriptJsonUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


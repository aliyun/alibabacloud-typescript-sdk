// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckModifyConfigNeedRestartResponseBody extends $dara.Model {
  /**
   * @remarks
   * 变更配置参数后是否重启。取值说明：
   * 
   * - **true**：重启。
   * 
   * - **false**：不重启。
   * 
   * @example
   * true
   */
  needRestart?: boolean;
  /**
   * @remarks
   * 请求 ID。
   * 
   * @example
   * 06798FEE-BEF2-5FAF-A30D-728973BBE97C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      needRestart: 'NeedRestart',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRestart: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


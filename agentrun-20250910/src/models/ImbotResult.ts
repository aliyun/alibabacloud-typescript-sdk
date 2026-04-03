// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IMBotInfo } from "./ImbotInfo";


export class IMBotResult extends $dara.Model {
  /**
   * @remarks
   * OK 表示成功
   */
  code?: string;
  data?: IMBotInfo;
  /**
   * @remarks
   * 与响应头 x-funagent-request-id 对应
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: IMBotInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


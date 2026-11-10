// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Quota } from "./Quota";
import { QuotaUsage } from "./QuotaUsage";


export class DescribeQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message. The value is success for a successful request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The quota configuration information.
   */
  quota?: Quota;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7ADFF8D8-D4BA-5F79-AD49-DDABFEA59B6C
   */
  requestId?: string;
  /**
   * @remarks
   * Team 当前配额用量。用量不可用时省略；成功查询且无占用时返回三项零值。
   * 
   * @example
   * {"cpuCores":1,"memoryGB":1.5,"instanceCount":1}
   */
  usage?: QuotaUsage;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      quota: 'quota',
      requestId: 'requestId',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      quota: Quota,
      requestId: 'string',
      usage: QuotaUsage,
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


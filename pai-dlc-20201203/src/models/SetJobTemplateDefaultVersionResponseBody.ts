// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetJobTemplateDefaultVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * 设置后的默认版本号
   * 
   * @example
   * 2
   */
  defaultVersion?: number;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:00Z
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * 本次请求的 ID，用于诊断和答疑。
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-xxxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultVersion: 'DefaultVersion',
      gmtModifyTime: 'GmtModifyTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultVersion: 'number',
      gmtModifyTime: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePhoneNoAReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 创建结果
   * 
   * @example
   * true
   */
  createResult?: boolean;
  /**
   * @remarks
   * 创建类型枚举，1为成功，负数为创建失败
   * 
   * @example
   * 1
   */
  failType?: number;
  static names(): { [key: string]: string } {
    return {
      createResult: 'CreateResult',
      failType: 'FailType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createResult: 'boolean',
      failType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


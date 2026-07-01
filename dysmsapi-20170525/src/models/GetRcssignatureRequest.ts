// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRCSSignatureRequest extends $dara.Model {
  /**
   * @remarks
   * 签名名称
   * 
   * @example
   * 示例值示例值
   */
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


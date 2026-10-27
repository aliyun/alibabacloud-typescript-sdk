// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentityProviderServiceProviderRequest extends $dara.Model {
  /**
   * @remarks
   * 查询参数必填，仅支持精确值 SAML；响应返回 SAML。
   * 
   * This parameter is required.
   * 
   * @example
   * SAML
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


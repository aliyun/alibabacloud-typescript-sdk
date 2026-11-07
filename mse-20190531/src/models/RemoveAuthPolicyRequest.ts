// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveAuthPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which the returned results are displayed. Values: zh-CN (default): Chinese, en-US: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 259
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


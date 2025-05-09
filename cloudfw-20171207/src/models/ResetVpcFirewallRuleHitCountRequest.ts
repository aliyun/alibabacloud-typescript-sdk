// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetVpcFirewallRuleHitCountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df221a****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The natural language of the request and response. 
   * 
   * Valid values:
   * 
   * - **zh**: Chinese (default)
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


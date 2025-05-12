// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyGroupRequestDomainResolveRule extends $dara.Model {
  /**
   * @remarks
   * The description of domain name resolution rule.
   * 
   * @example
   * system policy
   */
  description?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * *.baidu.com
   */
  domain?: string;
  /**
   * @remarks
   * Specifies whether to allow the domain name resolution rule.
   * 
   * Valid values:
   * 
   * *   allow: allows the rule.
   * *   block: denies the rule.
   * 
   * @example
   * allow
   */
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      domain: 'Domain',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domain: 'string',
      policy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


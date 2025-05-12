// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPolicyGroupRequestDomainResolveRule extends $dara.Model {
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * description policy
   */
  description?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * *.igetget.com
   */
  domain?: string;
  /**
   * @remarks
   * The resolution policy.
   * 
   * Valid values:
   * 
   * *   allow
   * *   block
   * 
   * @example
   * block
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


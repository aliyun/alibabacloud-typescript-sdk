// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCenterPolicyRequestDomainResolveRule extends $dara.Model {
  /**
   * @remarks
   * The policy description.
   */
  description?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * *.example.com
   */
  domain?: string;
  /**
   * @remarks
   * Specifies whether to allow the domain name resolution rule.
   * 
   * Valid values:
   * 
   * *   allow
   * *   block
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


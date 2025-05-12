// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsDomainResolveRule extends $dara.Model {
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The destination domain name.
   * 
   * @example
   * *.com
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether the domain name resolution rule is allowed.
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


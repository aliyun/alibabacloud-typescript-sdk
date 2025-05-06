// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetManagedRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The identifier of the managed rule.
   * 
   * For more information about how to obtain the identifier of a managed rule, see [ListManagedRules](https://help.aliyun.com/document_detail/421144.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cdn-domain-https-enabled
   */
  identifier?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


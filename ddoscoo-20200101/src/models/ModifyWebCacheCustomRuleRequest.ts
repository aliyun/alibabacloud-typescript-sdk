// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebCacheCustomRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
      rules: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


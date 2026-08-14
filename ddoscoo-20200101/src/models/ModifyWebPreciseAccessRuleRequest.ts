// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebPreciseAccessRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  expires?: number;
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      expires: 'Expires',
      resourceGroupId: 'ResourceGroupId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      expires: 'number',
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


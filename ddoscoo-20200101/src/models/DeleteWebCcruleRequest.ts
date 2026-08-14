// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWebCCRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      name: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


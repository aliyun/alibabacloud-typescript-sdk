// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrgHonorTemplateHeadersAccountContext extends $dara.Model {
  /**
   * @example
   * 208579
   */
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


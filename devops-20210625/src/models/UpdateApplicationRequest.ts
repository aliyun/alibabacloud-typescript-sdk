// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationRequest extends $dara.Model {
  /**
   * @example
   * 1332695887xxxxxx
   */
  ownerAccountId?: string;
  /**
   * @example
   * 66c0c9fffeb86b450c199fcd
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccountId: 'ownerAccountId',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccountId: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


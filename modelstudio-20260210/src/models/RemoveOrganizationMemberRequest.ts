// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveOrganizationMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The list of member account IDs to be removed.
   */
  accountIds?: string[];
  /**
   * @remarks
   * The language. Valid values: zh-CN and en-US.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      locale: 'Locale',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      locale: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


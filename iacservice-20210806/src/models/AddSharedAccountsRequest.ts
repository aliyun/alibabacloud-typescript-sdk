// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSharedAccountsRequest extends $dara.Model {
  accountIds?: number[];
  /**
   * @example
   * Public
   */
  resourceId?: string;
  /**
   * @example
   * RegistryModule
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'accountIds',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      resourceId: 'string',
      resourceType: 'string',
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


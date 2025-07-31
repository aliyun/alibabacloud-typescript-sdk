// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUsersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  userIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      userIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userIdList)) {
      $dara.Model.validateArray(this.userIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


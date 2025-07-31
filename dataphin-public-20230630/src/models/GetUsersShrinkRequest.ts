// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUsersShrinkRequest extends $dara.Model {
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
  userIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      userIdListShrink: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      userIdListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


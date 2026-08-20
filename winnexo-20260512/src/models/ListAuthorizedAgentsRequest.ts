// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedAgentsRequest extends $dara.Model {
  /**
   * @remarks
   * The userId of the responsible user.
   * 
   * @example
   * USE
   */
  permission?: string;
  /**
   * @remarks
   * The target user ID.
   * 
   * @example
   * 1
   */
  targetUserId?: number;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      permission: 'permission',
      targetUserId: 'targetUserId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permission: 'string',
      targetUserId: 'number',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


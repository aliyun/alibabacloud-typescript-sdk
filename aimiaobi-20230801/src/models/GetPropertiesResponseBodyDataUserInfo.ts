// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPropertiesResponseBodyDataUserInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  agentId?: string;
  /**
   * @example
   * 1
   */
  tenantId?: string;
  /**
   * @example
   * 1
   */
  userId?: string;
  /**
   * @example
   * admin
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      tenantId: 'TenantId',
      userId: 'UserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      tenantId: 'string',
      userId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


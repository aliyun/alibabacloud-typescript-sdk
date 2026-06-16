// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthorizationResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * arres_01kgh3jvt7pk093rv6giu0c0qxxxx
   */
  authorizationResourceId?: string;
  /**
   * @remarks
   * The authorization rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * arrule_01kf143ug06fg7m9f43u7vahxxxx
   */
  authorizationRuleId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationResourceId: 'AuthorizationResourceId',
      authorizationRuleId: 'AuthorizationRuleId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationResourceId: 'string',
      authorizationRuleId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


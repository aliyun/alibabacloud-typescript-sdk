// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeResourceServerScopesToUserRequest extends $dara.Model {
  /**
   * @remarks
   * IDaaS的应用资源ID。
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * ResourceServer权限ID。
   * 
   * This parameter is required.
   * 
   * @example
   * ["ress_XXXXX","ress_XXXXX"]
   */
  resourceServerScopeIds?: string[];
  /**
   * @remarks
   * 用户ID。
   * 
   * This parameter is required.
   * 
   * @example
   * user_wovwffm62xifdziem7an7xxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      resourceServerScopeIds: 'ResourceServerScopeIds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      clientToken: 'string',
      instanceId: 'string',
      resourceServerScopeIds: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceServerScopeIds)) {
      $dara.Model.validateArray(this.resourceServerScopeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


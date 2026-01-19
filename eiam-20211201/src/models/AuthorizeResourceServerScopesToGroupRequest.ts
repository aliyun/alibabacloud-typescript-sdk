// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeResourceServerScopesToGroupRequest extends $dara.Model {
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
   * 组ID。
   * 
   * This parameter is required.
   * 
   * @example
   * group_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  groupId?: string;
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
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      clientToken: 'ClientToken',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      resourceServerScopeIds: 'ResourceServerScopeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      clientToken: 'string',
      groupId: 'string',
      instanceId: 'string',
      resourceServerScopeIds: { 'type': 'array', 'itemType': 'string' },
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


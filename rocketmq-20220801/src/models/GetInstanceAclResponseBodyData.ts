// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceAclResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The authentication type of the instance.
   * 
   * Valid values:
   * 
   * *   apache_acl: open source access control list (ACL)
   * *   default: the default account of the instance
   * 
   * @example
   * apache_acl
   */
  aclType?: string;
  /**
   * @remarks
   * The type of operations that can be performed on the resource.
   */
  actions?: string[];
  /**
   * @remarks
   * The decision result of the authorization.
   * 
   * @example
   * Allow
   */
  decision?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address whitelists.
   */
  ipWhitelists?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the resource on which the permissions are granted.
   * 
   * @example
   * test
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource on which the permissions are granted.
   * 
   * @example
   * Topic
   */
  resourceType?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * abc
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      aclType: 'aclType',
      actions: 'actions',
      decision: 'decision',
      instanceId: 'instanceId',
      ipWhitelists: 'ipWhitelists',
      regionId: 'regionId',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      actions: { 'type': 'array', 'itemType': 'string' },
      decision: 'string',
      instanceId: 'string',
      ipWhitelists: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(Array.isArray(this.ipWhitelists)) {
      $dara.Model.validateArray(this.ipWhitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


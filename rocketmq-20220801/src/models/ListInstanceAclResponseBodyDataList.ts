// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceAclResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The ACL type.
   * 
   * Valid value:
   * 
   * *   APACHE: open source ACL.
   * 
   * @example
   * APACHE
   */
  aclType?: string;
  /**
   * @remarks
   * The types of the operations that are allowed by the ACL.
   */
  actions?: string[];
  /**
   * @remarks
   * The decision result.
   * 
   * Valid values:
   * 
   * *   Deny: Access is denied.
   * *   Allow: Access is allowed.
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
   * The resource name.
   * 
   * @example
   * test
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * Valid values:
   * 
   * *   Group
   * *   Topic
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
   * test
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


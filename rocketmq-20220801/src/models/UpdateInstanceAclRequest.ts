// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceAclRequest extends $dara.Model {
  /**
   * @remarks
   * The following items describe the types of permissions that can be granted based on the resource type:
   * 
   * *   Topic: Pub, Sub, and Pub|Sub
   * *   Consumer group: Sub
   * 
   * Valid values:
   * 
   * *   SUB: subscribe
   * *   Pub|Sub: publish and subscribe
   * *   Pub: publish
   * 
   * @example
   * Pub
   */
  actions?: string[];
  /**
   * @remarks
   * The decision result of the authorization.
   * 
   * Valid values:
   * 
   * *   Deny
   * *   Allow
   * 
   * @example
   * Allow
   */
  decision?: string;
  /**
   * @remarks
   * The IP address whitelists.
   */
  ipWhitelists?: string[];
  /**
   * @remarks
   * The name of the resource on which you want to grant permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource on which you want to grant permissions.
   * 
   * Valid values:
   * 
   * *   Group
   * *   Topic
   * 
   * This parameter is required.
   * 
   * @example
   * Topic
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      decision: 'decision',
      ipWhitelists: 'ipWhitelists',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      decision: 'string',
      ipWhitelists: { 'type': 'array', 'itemType': 'string' },
      resourceName: 'string',
      resourceType: 'string',
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


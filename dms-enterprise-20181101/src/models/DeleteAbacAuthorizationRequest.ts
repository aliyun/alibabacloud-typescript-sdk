// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAbacAuthorizationRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  authorizationId?: number;
  /**
   * @remarks
   * The type of object to which you want to attach the policy.********
   * 
   * Valid values:
   * 
   * *   USER
   * *   ROLE
   * 
   * This parameter is required.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationId: 'AuthorizationId',
      identityType: 'IdentityType',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationId: 'number',
      identityType: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


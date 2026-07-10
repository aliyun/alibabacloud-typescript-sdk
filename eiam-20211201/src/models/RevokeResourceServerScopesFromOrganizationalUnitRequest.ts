// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeResourceServerScopesFromOrganizationalUnitRequest extends $dara.Model {
  /**
   * @remarks
   * The ResourceServer application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
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
  /**
   * @remarks
   * The organizational unit ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * The list of Scope permission IDs under the ResourceServer.
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
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
      resourceServerScopeIds: 'ResourceServerScopeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      organizationalUnitId: 'string',
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


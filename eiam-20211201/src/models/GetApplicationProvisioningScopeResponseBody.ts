// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationProvisioningScopeResponseBodyApplicationProvisioningScope extends $dara.Model {
  /**
   * @remarks
   * Synchronize the list of authorized groups.
   */
  groupIds?: string[];
  /**
   * @remarks
   * Instance Indicates the maximum quota number of authorized agents.
   * 
   * @example
   * 20
   */
  maxQuota?: number;
  /**
   * @remarks
   * The list of organizational units that are authorized for account synchronization.
   */
  organizationalUnitIds?: string[];
  /**
   * @remarks
   * Indicates the quota number of used authorized agents.
   * 
   * @example
   * 10
   */
  usedQuota?: number;
  static names(): { [key: string]: string } {
    return {
      groupIds: 'GroupIds',
      maxQuota: 'MaxQuota',
      organizationalUnitIds: 'OrganizationalUnitIds',
      usedQuota: 'UsedQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIds: { 'type': 'array', 'itemType': 'string' },
      maxQuota: 'number',
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
      usedQuota: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    if(Array.isArray(this.organizationalUnitIds)) {
      $dara.Model.validateArray(this.organizationalUnitIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningScopeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The scope of account synchronization.
   */
  applicationProvisioningScope?: GetApplicationProvisioningScopeResponseBodyApplicationProvisioningScope;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationProvisioningScope: 'ApplicationProvisioningScope',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationProvisioningScope: GetApplicationProvisioningScopeResponseBodyApplicationProvisioningScope,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationProvisioningScope && typeof (this.applicationProvisioningScope as any).validate === 'function') {
      (this.applicationProvisioningScope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


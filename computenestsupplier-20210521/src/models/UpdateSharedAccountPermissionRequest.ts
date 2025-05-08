// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSharedAccountPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * Client token, used to ensure the idempotence of requests. Generate a unique value for this parameter from your client to ensure it is unique across different requests. ClientToken supports only ASCII characters.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * Permission type. Possible values:
   * - Deployable: Can be deployed.
   * - Accessible: Can be accessed.
   * - AccessibleIncludeBeta: Can access all versions, including Beta versions.
   * - DeployableIncludeBeta: Can deploy all versions, including Beta versions.
   * - Authorized: Authorized (for reselling scenarios)
   * - Unauthorized: Unauthorized (for reselling scenarios)
   * 
   * This parameter is required.
   * 
   * @example
   * Deployable
   */
  permission?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-0d6e1d846e4c4axxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * Service sharing type, with a default value of SharedAccount. Available options:
   * 
   * - SharedAccount: Regular sharing type.
   * 
   * - Reseller: Reselling sharing type.
   * 
   * @example
   * SharedAccount
   */
  type?: string;
  /**
   * @remarks
   * Whitelist account for service sharing.
   * 
   * This parameter is required.
   * 
   * @example
   * 1563457855xxxxxx
   */
  userAliUid?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      permission: 'Permission',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      type: 'Type',
      userAliUid: 'UserAliUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      permission: 'string',
      regionId: 'string',
      serviceId: 'string',
      type: 'string',
      userAliUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


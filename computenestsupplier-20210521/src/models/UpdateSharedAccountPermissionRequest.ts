// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSharedAccountPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. Generate a unique value for this parameter on your client. The client token can contain only ASCII characters.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * The permission type. Valid values:
   * 
   * - Deployable: The service can be deployed.
   * 
   * - Accessible: The service can be accessed.
   * 
   * - AccessibleIncludeBeta: All versions of the service, including beta versions, can be accessed.
   * 
   * - DeployableIncludeBeta: All versions of the service, including beta versions, can be deployed.
   * 
   * - Authorized: The service is authorized. This value is used for distribution scenarios.
   * 
   * - Unauthorized: The service is not authorized. This value is used for distribution scenarios.
   * 
   * This parameter is required.
   * 
   * @example
   * Deployable
   */
  permission?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-0d6e1d846e4c4axxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The type of service sharing. The default value is SharedAccount. Valid values:
   * 
   * - SharedAccount: Regular sharing.
   * 
   * - Reseller: Distribution sharing.
   * 
   * @example
   * SharedAccount
   */
  type?: string;
  /**
   * @remarks
   * The whitelisted account with which the service is shared.
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


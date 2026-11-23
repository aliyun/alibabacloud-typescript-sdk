// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLatestThirdAppAccessTokenRequestResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud desktop specified when the token was created. You must provide a non-empty value that is consistent with the value used during creation. Asterisks (*) are not allowed.
   * 
   * @example
   * ecd-7a8b9c0d****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. This parameter is required. Valid value: DESKTOP, which indicates a cloud desktop. The value is case-insensitive.
   * 
   * @example
   * DESKTOP
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestThirdAppAccessTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The WyId of the user used when the token was created. It must correspond to the current account and the target cloud desktop, and cannot be replaced by a username.
   * 
   * This parameter is required.
   * 
   * @example
   * f1e2d3c4b5a6****
   */
  authorizerId?: string;
  /**
   * @remarks
   * The business channel. Valid values: Enterprise and Business. The value is case-insensitive. If omitted, the default value is Enterprise. If an empty string or other value is explicitly passed, a parameter error is returned. This parameter does not replace user identity verification.
   * 
   * @example
   * Enterprise
   */
  businessChannel?: string;
  /**
   * @remarks
   * The target single cloud desktop resource. You must provide this object along with ResourceType and ResourceId when calling this operation. Pass it as a JSON object to specify only one cloud desktop. Wildcards or authorization for all cloud desktops are not supported.
   */
  resource?: GetLatestThirdAppAccessTokenRequestResource;
  static names(): { [key: string]: string } {
    return {
      authorizerId: 'AuthorizerId',
      businessChannel: 'BusinessChannel',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizerId: 'string',
      businessChannel: 'string',
      resource: GetLatestThirdAppAccessTokenRequestResource,
    };
  }

  validate() {
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


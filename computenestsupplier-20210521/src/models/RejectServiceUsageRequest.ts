// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RejectServiceUsageRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token that ensures the idempotence of a request. Make sure that the token is unique for each request. The token can contain only ASCII characters.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * The approval comments.
   * 
   * @example
   * Thank you for your application. Please fill in the correct information.
   */
  comments?: string;
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-2117508c874c41xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service sharing type. The default value is SharedAccount. Valid values:
   * 
   * - SharedAccount: The common sharing type.
   * 
   * - Reseller: The reseller sharing type.
   * 
   * @example
   * SharedAccount
   */
  type?: number;
  /**
   * @remarks
   * The ID of the user\\"s Alibaba Cloud account.
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
      comments: 'Comments',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      type: 'Type',
      userAliUid: 'UserAliUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      comments: 'string',
      regionId: 'string',
      serviceId: 'string',
      type: 'number',
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


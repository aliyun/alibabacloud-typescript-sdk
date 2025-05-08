// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RejectServiceUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * Reject comments.
   * 
   * @example
   * Thanks for your application, please add your industry information.
   */
  comments?: string;
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
   * The share type of the service. Default value: SharedAccount. Valid values:
   * 
   * *   SharedAccount: The service is shared by multiple accounts.
   * *   Reseller: The service is distributed.
   * 
   * @example
   * SharedAccount
   */
  type?: number;
  /**
   * @remarks
   * User ali uid.
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
      serviceId: 'ServiceId',
      type: 'Type',
      userAliUid: 'UserAliUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      comments: 'string',
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


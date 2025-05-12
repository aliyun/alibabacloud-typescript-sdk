// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthorizationTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The temporary password returned after you call this API operation is a Security Token Service (STS) token whose validity period is 1 hour. Take note of the following items when you log on to Container Registry instances by using an STS token:
   * 
   * *   If the STS token belongs to an Alibaba Cloud account, you can use the STS token to log on to all Container Registry instances that belong to the Alibaba Cloud account.
   * *   If the STS token belongs to a Resource Access Management (RAM) user, you can use the STS token to log on to all Container Registry instances that belong to the RAM user.
   * *   You can use an STS token to access only Container Registry instances to which the STS token is scoped.
   * 
   * @example
   * shaunadadakks:uuczxnjcyeyhdjadkkajsjdjadhyucb
   */
  authorizationToken?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful.
   * 
   * *   `true`: successful
   * *   `false`: failed
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * 1571242083000
   */
  expireTime?: number;
  /**
   * @remarks
   * The username that is used to log on to the Container Registry instance.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The timestamp when the temporary password expires. Unit: milliseconds.
   * 
   * @example
   * E069EB86-E6AD-4A98-ADDE-0E993390239A
   */
  requestId?: string;
  /**
   * @remarks
   * The password that is used to log on to the Container Registry instance.
   * 
   * @example
   * temp_user_cr
   */
  tempUsername?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationToken: 'AuthorizationToken',
      code: 'Code',
      expireTime: 'ExpireTime',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      tempUsername: 'TempUsername',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationToken: 'string',
      code: 'string',
      expireTime: 'number',
      isSuccess: 'boolean',
      requestId: 'string',
      tempUsername: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


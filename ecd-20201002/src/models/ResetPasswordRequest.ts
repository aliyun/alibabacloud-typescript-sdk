// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * 95e41934-383e-4c9f-824f-3b93b19b****
   */
  clientId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 2f00ab32-a473-4c90-9aae-dd8842ae****
   */
  clientToken?: string;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * a***@example.edu
   */
  email?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * liming
   */
  endUserId?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-899235****
   */
  officeSiteId?: string;
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
   * The phone number of the user.
   * 
   * @example
   * 1827912****
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientToken: 'ClientToken',
      email: 'Email',
      endUserId: 'EndUserId',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      phone: 'phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientToken: 'string',
      email: 'string',
      endUserId: 'string',
      officeSiteId: 'string',
      regionId: 'string',
      phone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


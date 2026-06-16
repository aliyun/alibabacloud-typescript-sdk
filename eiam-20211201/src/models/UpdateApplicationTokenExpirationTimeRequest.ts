// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationTokenExpirationTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The application token ID.
   * 
   * This parameter is required.
   * 
   * @example
   * token_sfrwerxxxxxxxxxxxxxx
   */
  applicationTokenId?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1735530123762
   */
  expirationTime?: number;
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
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationTokenId: 'ApplicationTokenId',
      expirationTime: 'ExpirationTime',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationTokenId: 'string',
      expirationTime: 'number',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


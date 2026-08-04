// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSaasServiceVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the service can be upgraded.
   * 
   * @example
   * true
   */
  canUpgrade?: boolean;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * agdb-xxxxx
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      canUpgrade: 'CanUpgrade',
      message: 'Message',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canUpgrade: 'boolean',
      message: 'string',
      requestId: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterRenewApiKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The new expiration time in RFC 3339 format. The time must be later than the current time. If this parameter is not specified or is set to null, the API key remains valid indefinitely. This parameter only modifies the validity period and does not change the enabled or disabled status.
   * 
   * @example
   * 2027-01-01T00:00:00+08:00
   */
  expireAt?: string;
  static names(): { [key: string]: string } {
    return {
      expireAt: 'expireAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


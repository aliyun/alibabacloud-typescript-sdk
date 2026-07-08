// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStsTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The Elastic Desktop Service (EDS) username.
   * 
   * > Either EndUserId or ExternalId is required.
   * 
   * @example
   * Alex
   */
  endUserId?: string;
  /**
   * @remarks
   * The validity period of the token, in seconds. The maximum period is two days.
   * 
   * @example
   * 600
   */
  expiration?: number;
  /**
   * @remarks
   * The ID of the external user.
   * 
   * @example
   * Alex
   */
  externalId?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      expiration: 'Expiration',
      externalId: 'ExternalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      expiration: 'number',
      externalId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStsTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The Wuying username.
   * 
   * 
   * > Either the Wuying username or the external ID is required.
   * 
   * @example
   * Alex
   */
  endUserId?: string;
  /**
   * @remarks
   * The expiration time in seconds. The maximum validity period is two days.
   * 
   * @example
   * 600
   */
  expiration?: number;
  /**
   * @remarks
   * The external user ID.
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


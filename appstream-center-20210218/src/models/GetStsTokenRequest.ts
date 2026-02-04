// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStsTokenRequest extends $dara.Model {
  /**
   * @example
   * Alex
   */
  endUserId?: string;
  /**
   * @example
   * 600
   */
  expiration?: number;
  /**
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


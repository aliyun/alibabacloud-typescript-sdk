// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateCdnUrlAuthRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  inputUrl?: string;
  ownerId?: string;
  resourceRealOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      inputUrl: 'InputUrl',
      ownerId: 'OwnerId',
      resourceRealOwnerId: 'ResourceRealOwnerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputUrl: 'string',
      ownerId: 'string',
      resourceRealOwnerId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


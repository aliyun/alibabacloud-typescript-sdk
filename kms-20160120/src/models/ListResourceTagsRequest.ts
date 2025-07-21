// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The globally unique ID of the CMK.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


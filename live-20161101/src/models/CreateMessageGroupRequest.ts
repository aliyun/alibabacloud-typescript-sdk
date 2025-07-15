// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMessageGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application.
   * 
   * This parameter is required.
   * 
   * @example
   * a494caec-***-695ef345db77
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the creator. The ID can be up to 36 characters in length and can contain only letters and digits.
   * 
   * This parameter is required.
   * 
   * @example
   * as****hs
   */
  creatorId?: string;
  /**
   * @remarks
   * The extended field.
   */
  extension?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      creatorId: 'CreatorId',
      extension: 'Extension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      creatorId: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.extension) {
      $dara.Model.validateMap(this.extension);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


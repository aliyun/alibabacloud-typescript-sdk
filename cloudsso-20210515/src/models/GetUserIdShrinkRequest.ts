// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserIdShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The identifier information about the user that is synchronized from an external identity provider (IdP).
   */
  externalIdShrink?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      externalIdShrink: 'ExternalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      externalIdShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


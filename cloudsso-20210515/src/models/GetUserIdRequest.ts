// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUserIdRequestExternalId } from "./GetUserIdRequestExternalId";


export class GetUserIdRequest extends $dara.Model {
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
  externalId?: GetUserIdRequestExternalId;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      externalId: 'ExternalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      externalId: GetUserIdRequestExternalId,
    };
  }

  validate() {
    if(this.externalId && typeof (this.externalId as any).validate === 'function') {
      (this.externalId as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


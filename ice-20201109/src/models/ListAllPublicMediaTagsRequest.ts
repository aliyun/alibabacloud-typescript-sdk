// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllPublicMediaTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The business type of the media asset.
   * 
   * @example
   * "sticker"
   */
  businessType?: string;
  /**
   * @remarks
   * The entity ID, which is used to distinguish between media assets of different types in the public domain.
   * 
   * Set this parameter to Copyright_Music, which indicates music in the public domain.
   * 
   * @example
   * Copyright_Music
   */
  entityId?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      entityId: 'EntityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      entityId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


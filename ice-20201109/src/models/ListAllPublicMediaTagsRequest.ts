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
   * The entity ID, used to distinguish different types of public copyright media assets. Valid values:
   * 
   * - Copyright_Music: public copyright music.
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


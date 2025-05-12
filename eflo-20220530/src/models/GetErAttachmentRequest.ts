// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetErAttachmentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Lingjun HUB network connection instance.
   * 
   * This parameter is required.
   * 
   * @example
   * er-attachment-i1ioibyf
   */
  erAttachmentId?: string;
  /**
   * @remarks
   * Lingjun HUB ID.
   * 
   * This parameter is required.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      erAttachmentId: 'ErAttachmentId',
      erId: 'ErId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erAttachmentId: 'string',
      erId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


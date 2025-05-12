// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateErAttachmentRequest extends $dara.Model {
  /**
   * @remarks
   * The connection ID of the Lingjun HUB network instance.
   * 
   * This parameter is required.
   * 
   * @example
   * er-attachment-i1ioibyf
   */
  erAttachmentId?: string;
  /**
   * @remarks
   * Lingjun HUB Network Instance Connection Name
   * 
   * @example
   * er-attachment-wulanchabu-main
   */
  erAttachmentName?: string;
  /**
   * @remarks
   * Lingjun HUB ID
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
      erAttachmentName: 'ErAttachmentName',
      erId: 'ErId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erAttachmentId: 'string',
      erAttachmentName: 'string',
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


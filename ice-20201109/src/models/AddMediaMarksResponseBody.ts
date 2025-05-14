// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMediaMarksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * 53afdf003a******6a16b5feac6402
   */
  mediaId?: string;
  /**
   * @remarks
   * The IDs of the marks that are added.
   * 
   * @example
   * mark-f82d*****4994b0915948ef7e16,mark-3d56d*****4c8fa9ae2a1f9e5d2d60
   */
  mediaMarkIds?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 771A1414-27BF-53E6-AB73-EFCB*****ACF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      mediaMarkIds: 'MediaMarkIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      mediaMarkIds: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


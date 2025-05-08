// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStorageVolumeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7030AB96-57CF-1C68-9FEE-D60E547FD79C
   */
  requestId?: string;
  /**
   * @remarks
   * An array of volume IDs.
   */
  volumeId?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      volumeId: 'VolumeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      volumeId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.volumeId)) {
      $dara.Model.validateArray(this.volumeId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


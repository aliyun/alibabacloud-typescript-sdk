// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStorageVolumeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the volume.
   * 
   * This parameter is required.
   * 
   * @example
   * sv-***
   */
  volumeId?: string;
  static names(): { [key: string]: string } {
    return {
      volumeId: 'VolumeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


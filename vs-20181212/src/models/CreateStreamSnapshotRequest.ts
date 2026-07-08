// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStreamSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * Stream ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * Screenshot method. Valid values:
   * 
   * - center (cloud screenshot) (default)
   * 
   * - device (device screenshot)
   * 
   * @example
   * device
   */
  location?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      location: 'Location',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      location: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


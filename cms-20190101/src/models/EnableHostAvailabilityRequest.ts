// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableHostAvailabilityRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the availability monitoring task.
   * 
   * This parameter is required.
   */
  id?: number[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: { 'type': 'array', 'itemType': 'number' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.id)) {
      $dara.Model.validateArray(this.id);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


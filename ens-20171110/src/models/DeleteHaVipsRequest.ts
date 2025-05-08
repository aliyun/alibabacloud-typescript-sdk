// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHaVipsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  haVipIds?: string[];
  static names(): { [key: string]: string } {
    return {
      haVipIds: 'HaVipIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haVipIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.haVipIds)) {
      $dara.Model.validateArray(this.haVipIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


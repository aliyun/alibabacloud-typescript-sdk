// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHaVipResponseBody extends $dara.Model {
  haVipIds?: string[];
  /**
   * @example
   * AAE90880-4970-4D81-A534-A6C0F3631F74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      haVipIds: 'HaVipIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haVipIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HandleUnknownThreatDetectEventRequest extends $dara.Model {
  eventIdList?: string[];
  /**
   * @example
   * 3
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      eventIdList: 'EventIdList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventIdList: { 'type': 'array', 'itemType': 'string' },
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventIdList)) {
      $dara.Model.validateArray(this.eventIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


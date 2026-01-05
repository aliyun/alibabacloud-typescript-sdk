// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSlotsResponseBody extends $dara.Model {
  /**
   * @example
   * A731A84D-55C9-44F7-99BB-E1CF0CF19197
   */
  requestId?: string;
  /**
   * @example
   * slot-5zk866779me51jgu3w
   */
  slotIds?: string;
  summary?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slotIds: 'SlotIds',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slotIds: 'string',
      summary: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.summary) {
      $dara.Model.validateMap(this.summary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


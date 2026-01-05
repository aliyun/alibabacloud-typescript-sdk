// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSlotResponseBody extends $dara.Model {
  /**
   * @example
   * end-5zk866779me51jgu3w,end-5zk866779me51jgu3w
   */
  endpointIds?: string;
  /**
   * @example
   * A731A84D-55C9-44F7-99BB-E1CF0CF19197
   */
  requestId?: string;
  /**
   * @example
   * slot-5zk866779me51jgu3w
   */
  slotId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointIds: 'EndpointIds',
      requestId: 'RequestId',
      slotId: 'SlotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointIds: 'string',
      requestId: 'string',
      slotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


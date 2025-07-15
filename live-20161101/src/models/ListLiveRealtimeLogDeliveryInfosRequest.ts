// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveRealtimeLogDeliveryInfosRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter has no practical significance.
   * 
   * @example
   * 1
   */
  liveOpenapiReserve?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      liveOpenapiReserve: 'LiveOpenapiReserve',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveOpenapiReserve: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


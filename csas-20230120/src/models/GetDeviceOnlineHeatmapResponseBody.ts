// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceOnlineHeatmapResponseBody extends $dara.Model {
  /**
   * @remarks
   * The online time distribution.
   */
  deviceOnlineHeatmap?: number[][];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D6707286-A50E-57B1-B2CF-EFAC59E850D8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceOnlineHeatmap: 'DeviceOnlineHeatmap',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceOnlineHeatmap: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'number' } },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deviceOnlineHeatmap)) {
      $dara.Model.validateArray(this.deviceOnlineHeatmap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


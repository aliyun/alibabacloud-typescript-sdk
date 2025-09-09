// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNetworkAvailableZonesResponseBodyData extends $dara.Model {
  regionIdList?: string[];
  zoneIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      regionIdList: 'RegionIdList',
      zoneIdList: 'ZoneIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionIdList: { 'type': 'array', 'itemType': 'string' },
      zoneIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.regionIdList)) {
      $dara.Model.validateArray(this.regionIdList);
    }
    if(Array.isArray(this.zoneIdList)) {
      $dara.Model.validateArray(this.zoneIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkAvailableZonesResponseBody extends $dara.Model {
  data?: GetNetworkAvailableZonesResponseBodyData;
  /**
   * @example
   * A17F9930-E2DC-5E87-B6D6-B0BCD2B00834
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetNetworkAvailableZonesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


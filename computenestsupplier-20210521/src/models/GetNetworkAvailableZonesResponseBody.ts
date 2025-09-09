// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNetworkAvailableZonesResponseBodyData extends $dara.Model {
  zoneIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      zoneIdList: 'ZoneIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
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
   * E8EF75BC-14E4-597A-BE66-FFA9393C0875
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


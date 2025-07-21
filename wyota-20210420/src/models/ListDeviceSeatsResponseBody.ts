// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceSeatsResponseBodyDataDeviceSeatDTOList extends $dara.Model {
  label?: string;
  seatName?: string;
  seatNo?: string;
  serialNo?: string;
  siteId?: string;
  siteName?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      seatName: 'SeatName',
      seatNo: 'SeatNo',
      serialNo: 'SerialNo',
      siteId: 'SiteId',
      siteName: 'SiteName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      seatName: 'string',
      seatNo: 'string',
      serialNo: 'string',
      siteId: 'string',
      siteName: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceSeatsResponseBodyData extends $dara.Model {
  deviceSeatDTOList?: ListDeviceSeatsResponseBodyDataDeviceSeatDTOList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deviceSeatDTOList: 'DeviceSeatDTOList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceSeatDTOList: { 'type': 'array', 'itemType': ListDeviceSeatsResponseBodyDataDeviceSeatDTOList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deviceSeatDTOList)) {
      $dara.Model.validateArray(this.deviceSeatDTOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceSeatsResponseBody extends $dara.Model {
  code?: string;
  data?: ListDeviceSeatsResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListDeviceSeatsResponseBodyData,
      message: 'string',
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


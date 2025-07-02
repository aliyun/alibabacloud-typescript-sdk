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


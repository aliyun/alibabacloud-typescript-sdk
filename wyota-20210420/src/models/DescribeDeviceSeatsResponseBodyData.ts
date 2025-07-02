// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceSeatsResponseBodyData extends $dara.Model {
  seatCol?: number;
  seatName?: string;
  seatNo?: string;
  seatRow?: number;
  serialNo?: string;
  siteId?: string;
  siteName?: string;
  static names(): { [key: string]: string } {
    return {
      seatCol: 'SeatCol',
      seatName: 'SeatName',
      seatNo: 'SeatNo',
      seatRow: 'SeatRow',
      serialNo: 'SerialNo',
      siteId: 'SiteId',
      siteName: 'SiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      seatCol: 'number',
      seatName: 'string',
      seatNo: 'string',
      seatRow: 'number',
      serialNo: 'string',
      siteId: 'string',
      siteName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


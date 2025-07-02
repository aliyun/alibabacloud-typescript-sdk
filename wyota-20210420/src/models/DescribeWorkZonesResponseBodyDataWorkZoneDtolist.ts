// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWorkZonesResponseBodyDataWorkZoneDTOList extends $dara.Model {
  seatCol?: number;
  seatRow?: number;
  tenantId?: string;
  zoneId?: string;
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      seatCol: 'SeatCol',
      seatRow: 'SeatRow',
      tenantId: 'TenantId',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      seatCol: 'number',
      seatRow: 'number',
      tenantId: 'string',
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


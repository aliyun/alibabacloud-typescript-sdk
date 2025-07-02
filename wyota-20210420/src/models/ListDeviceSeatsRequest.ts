// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceSeatsRequest extends $dara.Model {
  label?: string;
  seatNo?: string;
  serialNoList?: string[];
  tenantId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      seatNo: 'SeatNo',
      serialNoList: 'SerialNoList',
      tenantId: 'TenantId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      seatNo: 'string',
      serialNoList: { 'type': 'array', 'itemType': 'string' },
      tenantId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.serialNoList)) {
      $dara.Model.validateArray(this.serialNoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


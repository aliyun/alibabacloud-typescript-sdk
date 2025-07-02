// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDeviceSeatsAndLabelsRequest extends $dara.Model {
  isUnique?: boolean;
  label?: string;
  labelList?: string[];
  seatName?: string;
  serialNo?: string;
  tenantId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      isUnique: 'IsUnique',
      label: 'Label',
      labelList: 'LabelList',
      seatName: 'SeatName',
      serialNo: 'SerialNo',
      tenantId: 'TenantId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isUnique: 'boolean',
      label: 'string',
      labelList: { 'type': 'array', 'itemType': 'string' },
      seatName: 'string',
      serialNo: 'string',
      tenantId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labelList)) {
      $dara.Model.validateArray(this.labelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionResourceResponseBodyDataArmCard extends $dara.Model {
  display?: boolean;
  oversellRatio?: number;
  remain?: number;
  reserveDisable?: boolean;
  reserveDisableTotal?: number;
  reserved?: number;
  statusDisable?: boolean;
  statusDisableTotal?: number;
  total?: number;
  type?: string;
  used?: number;
  usedRatio?: number;
  static names(): { [key: string]: string } {
    return {
      display: 'Display',
      oversellRatio: 'OversellRatio',
      remain: 'Remain',
      reserveDisable: 'ReserveDisable',
      reserveDisableTotal: 'ReserveDisableTotal',
      reserved: 'Reserved',
      statusDisable: 'StatusDisable',
      statusDisableTotal: 'StatusDisableTotal',
      total: 'Total',
      type: 'Type',
      used: 'Used',
      usedRatio: 'UsedRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'boolean',
      oversellRatio: 'number',
      remain: 'number',
      reserveDisable: 'boolean',
      reserveDisableTotal: 'number',
      reserved: 'number',
      statusDisable: 'boolean',
      statusDisableTotal: 'number',
      total: 'number',
      type: 'string',
      used: 'number',
      usedRatio: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


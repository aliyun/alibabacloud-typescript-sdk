// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionResourceResponseBodyDataIpv4s extends $dara.Model {
  display?: string;
  isp?: string;
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
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      display: 'Display',
      isp: 'Isp',
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
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'string',
      isp: 'string',
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
      vlan: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


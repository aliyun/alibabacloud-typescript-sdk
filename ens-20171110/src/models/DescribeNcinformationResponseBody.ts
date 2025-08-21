// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNCInformationResponseBodyDataCpu extends $dara.Model {
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

export class DescribeNCInformationResponseBodyDataGpu extends $dara.Model {
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

export class DescribeNCInformationResponseBodyDataHdd extends $dara.Model {
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

export class DescribeNCInformationResponseBodyDataInfo extends $dara.Model {
  ip?: string;
  name?: string;
  tag?: string[];
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      name: 'Name',
      tag: 'Tag',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      name: 'string',
      tag: { 'type': 'array', 'itemType': 'string' },
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNCInformationResponseBodyDataMemory extends $dara.Model {
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

export class DescribeNCInformationResponseBodyDataNvme extends $dara.Model {
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

export class DescribeNCInformationResponseBodyDataSsd extends $dara.Model {
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

export class DescribeNCInformationResponseBodyData extends $dara.Model {
  cpu?: DescribeNCInformationResponseBodyDataCpu;
  gpu?: DescribeNCInformationResponseBodyDataGpu;
  hdd?: DescribeNCInformationResponseBodyDataHdd;
  info?: DescribeNCInformationResponseBodyDataInfo;
  memory?: DescribeNCInformationResponseBodyDataMemory;
  nvme?: DescribeNCInformationResponseBodyDataNvme;
  online?: boolean;
  region?: string;
  ssd?: DescribeNCInformationResponseBodyDataSsd;
  virtual?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      hdd: 'Hdd',
      info: 'Info',
      memory: 'Memory',
      nvme: 'Nvme',
      online: 'Online',
      region: 'Region',
      ssd: 'Ssd',
      virtual: 'Virtual',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: DescribeNCInformationResponseBodyDataCpu,
      gpu: DescribeNCInformationResponseBodyDataGpu,
      hdd: DescribeNCInformationResponseBodyDataHdd,
      info: DescribeNCInformationResponseBodyDataInfo,
      memory: DescribeNCInformationResponseBodyDataMemory,
      nvme: DescribeNCInformationResponseBodyDataNvme,
      online: 'boolean',
      region: 'string',
      ssd: DescribeNCInformationResponseBodyDataSsd,
      virtual: 'string',
    };
  }

  validate() {
    if(this.cpu && typeof (this.cpu as any).validate === 'function') {
      (this.cpu as any).validate();
    }
    if(this.gpu && typeof (this.gpu as any).validate === 'function') {
      (this.gpu as any).validate();
    }
    if(this.hdd && typeof (this.hdd as any).validate === 'function') {
      (this.hdd as any).validate();
    }
    if(this.info && typeof (this.info as any).validate === 'function') {
      (this.info as any).validate();
    }
    if(this.memory && typeof (this.memory as any).validate === 'function') {
      (this.memory as any).validate();
    }
    if(this.nvme && typeof (this.nvme as any).validate === 'function') {
      (this.nvme as any).validate();
    }
    if(this.ssd && typeof (this.ssd as any).validate === 'function') {
      (this.ssd as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNCInformationResponseBodyPager extends $dara.Model {
  page?: number;
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNCInformationResponseBody extends $dara.Model {
  currentPage?: number;
  data?: DescribeNCInformationResponseBodyData[];
  desc?: string;
  msg?: string;
  pager?: DescribeNCInformationResponseBodyPager;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      desc: 'Desc',
      msg: 'Msg',
      pager: 'Pager',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': DescribeNCInformationResponseBodyData },
      desc: 'string',
      msg: 'string',
      pager: DescribeNCInformationResponseBodyPager,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.pager && typeof (this.pager as any).validate === 'function') {
      (this.pager as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


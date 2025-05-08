// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRegionResourceResponseBodyDataArmCard } from "./DescribeRegionResourceResponseBodyDataArmCard";
import { DescribeRegionResourceResponseBodyDataBandwidth } from "./DescribeRegionResourceResponseBodyDataBandwidth";
import { DescribeRegionResourceResponseBodyDataBlockStorage } from "./DescribeRegionResourceResponseBodyDataBlockStorage";
import { DescribeRegionResourceResponseBodyDataCpu } from "./DescribeRegionResourceResponseBodyDataCpu";
import { DescribeRegionResourceResponseBodyDataGpu } from "./DescribeRegionResourceResponseBodyDataGpu";
import { DescribeRegionResourceResponseBodyDataHdd } from "./DescribeRegionResourceResponseBodyDataHdd";
import { DescribeRegionResourceResponseBodyDataIpv4s } from "./DescribeRegionResourceResponseBodyDataIpv4s";
import { DescribeRegionResourceResponseBodyDataIpv6s } from "./DescribeRegionResourceResponseBodyDataIpv6s";
import { DescribeRegionResourceResponseBodyDataMemory } from "./DescribeRegionResourceResponseBodyDataMemory";
import { DescribeRegionResourceResponseBodyDataNvme } from "./DescribeRegionResourceResponseBodyDataNvme";
import { DescribeRegionResourceResponseBodyDataOssStorage } from "./DescribeRegionResourceResponseBodyDataOssStorage";
import { DescribeRegionResourceResponseBodyDataPangu } from "./DescribeRegionResourceResponseBodyDataPangu";
import { DescribeRegionResourceResponseBodyDataPcfarmNum } from "./DescribeRegionResourceResponseBodyDataPcfarmNum";
import { DescribeRegionResourceResponseBodyDataSsd } from "./DescribeRegionResourceResponseBodyDataSsd";


export class DescribeRegionResourceResponseBodyData extends $dara.Model {
  areaCode?: string;
  areaName?: string;
  armCard?: DescribeRegionResourceResponseBodyDataArmCard;
  attributes?: string[];
  bandwidth?: DescribeRegionResourceResponseBodyDataBandwidth;
  blockStorage?: DescribeRegionResourceResponseBodyDataBlockStorage;
  countryCode?: string;
  countryName?: string;
  cpu?: DescribeRegionResourceResponseBodyDataCpu;
  gpu?: DescribeRegionResourceResponseBodyDataGpu;
  hdd?: DescribeRegionResourceResponseBodyDataHdd;
  houseId?: string;
  ipv4s?: DescribeRegionResourceResponseBodyDataIpv4s[];
  ipv6s?: DescribeRegionResourceResponseBodyDataIpv6s[];
  ispTypes?: string[];
  memory?: DescribeRegionResourceResponseBodyDataMemory;
  name?: string;
  nvme?: DescribeRegionResourceResponseBodyDataNvme;
  ossStorage?: DescribeRegionResourceResponseBodyDataOssStorage;
  pangu?: DescribeRegionResourceResponseBodyDataPangu;
  pcfarmNum?: DescribeRegionResourceResponseBodyDataPcfarmNum;
  poc?: boolean;
  provinceCode?: string;
  provinceName?: string;
  reserveDisable?: boolean;
  ssd?: DescribeRegionResourceResponseBodyDataSsd;
  statusDisable?: boolean;
  type?: string;
  uuid?: string;
  virtual?: string;
  static names(): { [key: string]: string } {
    return {
      areaCode: 'AreaCode',
      areaName: 'AreaName',
      armCard: 'ArmCard',
      attributes: 'Attributes',
      bandwidth: 'Bandwidth',
      blockStorage: 'BlockStorage',
      countryCode: 'CountryCode',
      countryName: 'CountryName',
      cpu: 'Cpu',
      gpu: 'Gpu',
      hdd: 'Hdd',
      houseId: 'HouseId',
      ipv4s: 'Ipv4s',
      ipv6s: 'Ipv6s',
      ispTypes: 'IspTypes',
      memory: 'Memory',
      name: 'Name',
      nvme: 'Nvme',
      ossStorage: 'OssStorage',
      pangu: 'Pangu',
      pcfarmNum: 'PcfarmNum',
      poc: 'Poc',
      provinceCode: 'ProvinceCode',
      provinceName: 'ProvinceName',
      reserveDisable: 'ReserveDisable',
      ssd: 'Ssd',
      statusDisable: 'StatusDisable',
      type: 'Type',
      uuid: 'Uuid',
      virtual: 'Virtual',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaCode: 'string',
      areaName: 'string',
      armCard: DescribeRegionResourceResponseBodyDataArmCard,
      attributes: { 'type': 'array', 'itemType': 'string' },
      bandwidth: DescribeRegionResourceResponseBodyDataBandwidth,
      blockStorage: DescribeRegionResourceResponseBodyDataBlockStorage,
      countryCode: 'string',
      countryName: 'string',
      cpu: DescribeRegionResourceResponseBodyDataCpu,
      gpu: DescribeRegionResourceResponseBodyDataGpu,
      hdd: DescribeRegionResourceResponseBodyDataHdd,
      houseId: 'string',
      ipv4s: { 'type': 'array', 'itemType': DescribeRegionResourceResponseBodyDataIpv4s },
      ipv6s: { 'type': 'array', 'itemType': DescribeRegionResourceResponseBodyDataIpv6s },
      ispTypes: { 'type': 'array', 'itemType': 'string' },
      memory: DescribeRegionResourceResponseBodyDataMemory,
      name: 'string',
      nvme: DescribeRegionResourceResponseBodyDataNvme,
      ossStorage: DescribeRegionResourceResponseBodyDataOssStorage,
      pangu: DescribeRegionResourceResponseBodyDataPangu,
      pcfarmNum: DescribeRegionResourceResponseBodyDataPcfarmNum,
      poc: 'boolean',
      provinceCode: 'string',
      provinceName: 'string',
      reserveDisable: 'boolean',
      ssd: DescribeRegionResourceResponseBodyDataSsd,
      statusDisable: 'boolean',
      type: 'string',
      uuid: 'string',
      virtual: 'string',
    };
  }

  validate() {
    if(this.armCard && typeof (this.armCard as any).validate === 'function') {
      (this.armCard as any).validate();
    }
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    if(this.bandwidth && typeof (this.bandwidth as any).validate === 'function') {
      (this.bandwidth as any).validate();
    }
    if(this.blockStorage && typeof (this.blockStorage as any).validate === 'function') {
      (this.blockStorage as any).validate();
    }
    if(this.cpu && typeof (this.cpu as any).validate === 'function') {
      (this.cpu as any).validate();
    }
    if(this.gpu && typeof (this.gpu as any).validate === 'function') {
      (this.gpu as any).validate();
    }
    if(this.hdd && typeof (this.hdd as any).validate === 'function') {
      (this.hdd as any).validate();
    }
    if(Array.isArray(this.ipv4s)) {
      $dara.Model.validateArray(this.ipv4s);
    }
    if(Array.isArray(this.ipv6s)) {
      $dara.Model.validateArray(this.ipv6s);
    }
    if(Array.isArray(this.ispTypes)) {
      $dara.Model.validateArray(this.ispTypes);
    }
    if(this.memory && typeof (this.memory as any).validate === 'function') {
      (this.memory as any).validate();
    }
    if(this.nvme && typeof (this.nvme as any).validate === 'function') {
      (this.nvme as any).validate();
    }
    if(this.ossStorage && typeof (this.ossStorage as any).validate === 'function') {
      (this.ossStorage as any).validate();
    }
    if(this.pangu && typeof (this.pangu as any).validate === 'function') {
      (this.pangu as any).validate();
    }
    if(this.pcfarmNum && typeof (this.pcfarmNum as any).validate === 'function') {
      (this.pcfarmNum as any).validate();
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


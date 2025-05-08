// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNCInformationResponseBodyDataCpu } from "./DescribeNcinformationResponseBodyDataCpu";
import { DescribeNCInformationResponseBodyDataGpu } from "./DescribeNcinformationResponseBodyDataGpu";
import { DescribeNCInformationResponseBodyDataHdd } from "./DescribeNcinformationResponseBodyDataHdd";
import { DescribeNCInformationResponseBodyDataInfo } from "./DescribeNcinformationResponseBodyDataInfo";
import { DescribeNCInformationResponseBodyDataMemory } from "./DescribeNcinformationResponseBodyDataMemory";
import { DescribeNCInformationResponseBodyDataNvme } from "./DescribeNcinformationResponseBodyDataNvme";
import { DescribeNCInformationResponseBodyDataSsd } from "./DescribeNcinformationResponseBodyDataSsd";


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


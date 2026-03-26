// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostTypesResponseBodyDedicatedHostTypesDedicatedHostTypeSupportedInstanceTypeFamilies extends $dara.Model {
  supportedInstanceTypeFamily?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedInstanceTypeFamily: 'SupportedInstanceTypeFamily',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedInstanceTypeFamily: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedInstanceTypeFamily)) {
      $dara.Model.validateArray(this.supportedInstanceTypeFamily);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostTypesResponseBodyDedicatedHostTypesDedicatedHostTypeSupportedInstanceTypesList extends $dara.Model {
  supportedInstanceTypesList?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedInstanceTypesList: 'SupportedInstanceTypesList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedInstanceTypesList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedInstanceTypesList)) {
      $dara.Model.validateArray(this.supportedInstanceTypesList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostTypesResponseBodyDedicatedHostTypesDedicatedHostType extends $dara.Model {
  cores?: number;
  cpuOverCommitRatioRange?: string;
  dedicatedHostType?: string;
  GPUSpec?: string;
  localStorageAmount?: number;
  localStorageCapacity?: number;
  localStorageCategory?: string;
  memorySize?: number;
  physicalGpus?: number;
  sockets?: number;
  supportCpuOverCommitRatio?: boolean;
  supportedInstanceTypeFamilies?: DescribeDedicatedHostTypesResponseBodyDedicatedHostTypesDedicatedHostTypeSupportedInstanceTypeFamilies;
  supportedInstanceTypesList?: DescribeDedicatedHostTypesResponseBodyDedicatedHostTypesDedicatedHostTypeSupportedInstanceTypesList;
  totalVcpus?: number;
  totalVgpus?: number;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      cpuOverCommitRatioRange: 'CpuOverCommitRatioRange',
      dedicatedHostType: 'DedicatedHostType',
      GPUSpec: 'GPUSpec',
      localStorageAmount: 'LocalStorageAmount',
      localStorageCapacity: 'LocalStorageCapacity',
      localStorageCategory: 'LocalStorageCategory',
      memorySize: 'MemorySize',
      physicalGpus: 'PhysicalGpus',
      sockets: 'Sockets',
      supportCpuOverCommitRatio: 'SupportCpuOverCommitRatio',
      supportedInstanceTypeFamilies: 'SupportedInstanceTypeFamilies',
      supportedInstanceTypesList: 'SupportedInstanceTypesList',
      totalVcpus: 'TotalVcpus',
      totalVgpus: 'TotalVgpus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      cpuOverCommitRatioRange: 'string',
      dedicatedHostType: 'string',
      GPUSpec: 'string',
      localStorageAmount: 'number',
      localStorageCapacity: 'number',
      localStorageCategory: 'string',
      memorySize: 'number',
      physicalGpus: 'number',
      sockets: 'number',
      supportCpuOverCommitRatio: 'boolean',
      supportedInstanceTypeFamilies: DescribeDedicatedHostTypesResponseBodyDedicatedHostTypesDedicatedHostTypeSupportedInstanceTypeFamilies,
      supportedInstanceTypesList: DescribeDedicatedHostTypesResponseBodyDedicatedHostTypesDedicatedHostTypeSupportedInstanceTypesList,
      totalVcpus: 'number',
      totalVgpus: 'number',
    };
  }

  validate() {
    if(this.supportedInstanceTypeFamilies && typeof (this.supportedInstanceTypeFamilies as any).validate === 'function') {
      (this.supportedInstanceTypeFamilies as any).validate();
    }
    if(this.supportedInstanceTypesList && typeof (this.supportedInstanceTypesList as any).validate === 'function') {
      (this.supportedInstanceTypesList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostTypesResponseBodyDedicatedHostTypes extends $dara.Model {
  dedicatedHostType?: DescribeDedicatedHostTypesResponseBodyDedicatedHostTypesDedicatedHostType[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostType: 'DedicatedHostType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostType: { 'type': 'array', 'itemType': DescribeDedicatedHostTypesResponseBodyDedicatedHostTypesDedicatedHostType },
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedHostType)) {
      $dara.Model.validateArray(this.dedicatedHostType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostTypesResponseBody extends $dara.Model {
  dedicatedHostTypes?: DescribeDedicatedHostTypesResponseBodyDedicatedHostTypes;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5FE5FF06-3A33-4658-8495-6445FC54E327
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostTypes: 'DedicatedHostTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostTypes: DescribeDedicatedHostTypesResponseBodyDedicatedHostTypes,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dedicatedHostTypes && typeof (this.dedicatedHostTypes as any).validate === 'function') {
      (this.dedicatedHostTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


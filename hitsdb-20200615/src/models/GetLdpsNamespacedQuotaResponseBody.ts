// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLdpsNamespacedQuotaResponseBodyNamespacedQuotas extends $dara.Model {
  cpuAmount?: string;
  memoryAmount?: string;
  name?: string;
  usedCpu?: string;
  usedMemory?: string;
  static names(): { [key: string]: string } {
    return {
      cpuAmount: 'CpuAmount',
      memoryAmount: 'MemoryAmount',
      name: 'Name',
      usedCpu: 'UsedCpu',
      usedMemory: 'UsedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuAmount: 'string',
      memoryAmount: 'string',
      name: 'string',
      usedCpu: 'string',
      usedMemory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLdpsNamespacedQuotaResponseBody extends $dara.Model {
  namespacedQuotas?: GetLdpsNamespacedQuotaResponseBodyNamespacedQuotas[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      namespacedQuotas: 'NamespacedQuotas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespacedQuotas: { 'type': 'array', 'itemType': GetLdpsNamespacedQuotaResponseBodyNamespacedQuotas },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.namespacedQuotas)) {
      $dara.Model.validateArray(this.namespacedQuotas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


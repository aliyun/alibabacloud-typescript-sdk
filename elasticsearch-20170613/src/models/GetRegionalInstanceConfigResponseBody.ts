// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResultSpecInfoMapValue } from "./ResultSpecInfoMapValue";


export class GetRegionalInstanceConfigResponseBodyResultClientNodeAmountRange extends $dara.Model {
  maxAmount?: number;
  minAmount?: number;
  static names(): { [key: string]: string } {
    return {
      maxAmount: 'maxAmount',
      minAmount: 'minAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxAmount: 'number',
      minAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionalInstanceConfigResponseBodyResultClientNodeDiskList extends $dara.Model {
  diskType?: string;
  maxSize?: number;
  minSize?: number;
  scaleLimit?: number;
  static names(): { [key: string]: string } {
    return {
      diskType: 'diskType',
      maxSize: 'maxSize',
      minSize: 'minSize',
      scaleLimit: 'scaleLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskType: 'string',
      maxSize: 'number',
      minSize: 'number',
      scaleLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionalInstanceConfigResponseBodyResultDataNodeAmountRange extends $dara.Model {
  maxAmount?: number;
  minAmount?: number;
  static names(): { [key: string]: string } {
    return {
      maxAmount: 'maxAmount',
      minAmount: 'minAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxAmount: 'number',
      minAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionalInstanceConfigResponseBodyResultDataNodeDiskListSubClassificationConfines extends $dara.Model {
  maxSize?: number;
  minSize?: number;
  performanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      maxSize: 'maxSize',
      minSize: 'minSize',
      performanceLevel: 'performanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSize: 'number',
      minSize: 'number',
      performanceLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionalInstanceConfigResponseBodyResultDataNodeDiskList extends $dara.Model {
  diskType?: string;
  maxSize?: number;
  minSize?: number;
  scaleLimit?: number;
  subClassificationConfines?: GetRegionalInstanceConfigResponseBodyResultDataNodeDiskListSubClassificationConfines[];
  valueLimitSet?: number[];
  static names(): { [key: string]: string } {
    return {
      diskType: 'diskType',
      maxSize: 'maxSize',
      minSize: 'minSize',
      scaleLimit: 'scaleLimit',
      subClassificationConfines: 'subClassificationConfines',
      valueLimitSet: 'valueLimitSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskType: 'string',
      maxSize: 'number',
      minSize: 'number',
      scaleLimit: 'number',
      subClassificationConfines: { 'type': 'array', 'itemType': GetRegionalInstanceConfigResponseBodyResultDataNodeDiskListSubClassificationConfines },
      valueLimitSet: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.subClassificationConfines)) {
      $dara.Model.validateArray(this.subClassificationConfines);
    }
    if(Array.isArray(this.valueLimitSet)) {
      $dara.Model.validateArray(this.valueLimitSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionalInstanceConfigResponseBodyResultMasterDiskListSubClassificationConfines extends $dara.Model {
  maxSize?: number;
  minSize?: number;
  performanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      maxSize: 'maxSize',
      minSize: 'minSize',
      performanceLevel: 'performanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSize: 'number',
      minSize: 'number',
      performanceLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionalInstanceConfigResponseBodyResultMasterDiskList extends $dara.Model {
  diskType?: string;
  maxSize?: number;
  minSize?: number;
  scaleLimit?: number;
  subClassificationConfines?: GetRegionalInstanceConfigResponseBodyResultMasterDiskListSubClassificationConfines[];
  static names(): { [key: string]: string } {
    return {
      diskType: 'diskType',
      maxSize: 'maxSize',
      minSize: 'minSize',
      scaleLimit: 'scaleLimit',
      subClassificationConfines: 'subClassificationConfines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskType: 'string',
      maxSize: 'number',
      minSize: 'number',
      scaleLimit: 'number',
      subClassificationConfines: { 'type': 'array', 'itemType': GetRegionalInstanceConfigResponseBodyResultMasterDiskListSubClassificationConfines },
    };
  }

  validate() {
    if(Array.isArray(this.subClassificationConfines)) {
      $dara.Model.validateArray(this.subClassificationConfines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionalInstanceConfigResponseBodyResultWarmNodeAmountRange extends $dara.Model {
  maxAmount?: number;
  minAmount?: number;
  static names(): { [key: string]: string } {
    return {
      maxAmount: 'maxAmount',
      minAmount: 'minAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxAmount: 'number',
      minAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionalInstanceConfigResponseBodyResultWarmNodeDiskListSubClassificationConfines extends $dara.Model {
  maxSize?: number;
  minSize?: number;
  performanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      maxSize: 'maxSize',
      minSize: 'minSize',
      performanceLevel: 'performanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSize: 'number',
      minSize: 'number',
      performanceLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionalInstanceConfigResponseBodyResultWarmNodeDiskList extends $dara.Model {
  diskType?: string;
  maxSize?: number;
  minSize?: number;
  scaleLimit?: number;
  subClassificationConfines?: GetRegionalInstanceConfigResponseBodyResultWarmNodeDiskListSubClassificationConfines[];
  valueLimitSet?: number[];
  static names(): { [key: string]: string } {
    return {
      diskType: 'diskType',
      maxSize: 'maxSize',
      minSize: 'minSize',
      scaleLimit: 'scaleLimit',
      subClassificationConfines: 'subClassificationConfines',
      valueLimitSet: 'valueLimitSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskType: 'string',
      maxSize: 'number',
      minSize: 'number',
      scaleLimit: 'number',
      subClassificationConfines: { 'type': 'array', 'itemType': GetRegionalInstanceConfigResponseBodyResultWarmNodeDiskListSubClassificationConfines },
      valueLimitSet: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.subClassificationConfines)) {
      $dara.Model.validateArray(this.subClassificationConfines);
    }
    if(Array.isArray(this.valueLimitSet)) {
      $dara.Model.validateArray(this.valueLimitSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionalInstanceConfigResponseBodyResult extends $dara.Model {
  clientNodeAmountRange?: GetRegionalInstanceConfigResponseBodyResultClientNodeAmountRange;
  clientNodeDiskList?: GetRegionalInstanceConfigResponseBodyResultClientNodeDiskList[];
  clientSpecs?: string[];
  dataNodeAmountRange?: GetRegionalInstanceConfigResponseBodyResultDataNodeAmountRange;
  dataNodeDiskList?: GetRegionalInstanceConfigResponseBodyResultDataNodeDiskList[];
  dataNodeSpecs?: string[];
  kibanaSpecs?: string[];
  masterAmountRange?: string[];
  masterDiskList?: GetRegionalInstanceConfigResponseBodyResultMasterDiskList[];
  masterSpecs?: string[];
  specInfoMap?: { [key: string]: ResultSpecInfoMapValue };
  versions?: string[];
  warmNodeAmountRange?: GetRegionalInstanceConfigResponseBodyResultWarmNodeAmountRange;
  warmNodeDiskList?: GetRegionalInstanceConfigResponseBodyResultWarmNodeDiskList[];
  warmNodeSpecs?: string[];
  static names(): { [key: string]: string } {
    return {
      clientNodeAmountRange: 'clientNodeAmountRange',
      clientNodeDiskList: 'clientNodeDiskList',
      clientSpecs: 'clientSpecs',
      dataNodeAmountRange: 'dataNodeAmountRange',
      dataNodeDiskList: 'dataNodeDiskList',
      dataNodeSpecs: 'dataNodeSpecs',
      kibanaSpecs: 'kibanaSpecs',
      masterAmountRange: 'masterAmountRange',
      masterDiskList: 'masterDiskList',
      masterSpecs: 'masterSpecs',
      specInfoMap: 'specInfoMap',
      versions: 'versions',
      warmNodeAmountRange: 'warmNodeAmountRange',
      warmNodeDiskList: 'warmNodeDiskList',
      warmNodeSpecs: 'warmNodeSpecs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientNodeAmountRange: GetRegionalInstanceConfigResponseBodyResultClientNodeAmountRange,
      clientNodeDiskList: { 'type': 'array', 'itemType': GetRegionalInstanceConfigResponseBodyResultClientNodeDiskList },
      clientSpecs: { 'type': 'array', 'itemType': 'string' },
      dataNodeAmountRange: GetRegionalInstanceConfigResponseBodyResultDataNodeAmountRange,
      dataNodeDiskList: { 'type': 'array', 'itemType': GetRegionalInstanceConfigResponseBodyResultDataNodeDiskList },
      dataNodeSpecs: { 'type': 'array', 'itemType': 'string' },
      kibanaSpecs: { 'type': 'array', 'itemType': 'string' },
      masterAmountRange: { 'type': 'array', 'itemType': 'string' },
      masterDiskList: { 'type': 'array', 'itemType': GetRegionalInstanceConfigResponseBodyResultMasterDiskList },
      masterSpecs: { 'type': 'array', 'itemType': 'string' },
      specInfoMap: { 'type': 'map', 'keyType': 'string', 'valueType': ResultSpecInfoMapValue },
      versions: { 'type': 'array', 'itemType': 'string' },
      warmNodeAmountRange: GetRegionalInstanceConfigResponseBodyResultWarmNodeAmountRange,
      warmNodeDiskList: { 'type': 'array', 'itemType': GetRegionalInstanceConfigResponseBodyResultWarmNodeDiskList },
      warmNodeSpecs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.clientNodeAmountRange && typeof (this.clientNodeAmountRange as any).validate === 'function') {
      (this.clientNodeAmountRange as any).validate();
    }
    if(Array.isArray(this.clientNodeDiskList)) {
      $dara.Model.validateArray(this.clientNodeDiskList);
    }
    if(Array.isArray(this.clientSpecs)) {
      $dara.Model.validateArray(this.clientSpecs);
    }
    if(this.dataNodeAmountRange && typeof (this.dataNodeAmountRange as any).validate === 'function') {
      (this.dataNodeAmountRange as any).validate();
    }
    if(Array.isArray(this.dataNodeDiskList)) {
      $dara.Model.validateArray(this.dataNodeDiskList);
    }
    if(Array.isArray(this.dataNodeSpecs)) {
      $dara.Model.validateArray(this.dataNodeSpecs);
    }
    if(Array.isArray(this.kibanaSpecs)) {
      $dara.Model.validateArray(this.kibanaSpecs);
    }
    if(Array.isArray(this.masterAmountRange)) {
      $dara.Model.validateArray(this.masterAmountRange);
    }
    if(Array.isArray(this.masterDiskList)) {
      $dara.Model.validateArray(this.masterDiskList);
    }
    if(Array.isArray(this.masterSpecs)) {
      $dara.Model.validateArray(this.masterSpecs);
    }
    if(this.specInfoMap) {
      $dara.Model.validateMap(this.specInfoMap);
    }
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    if(this.warmNodeAmountRange && typeof (this.warmNodeAmountRange as any).validate === 'function') {
      (this.warmNodeAmountRange as any).validate();
    }
    if(Array.isArray(this.warmNodeDiskList)) {
      $dara.Model.validateArray(this.warmNodeDiskList);
    }
    if(Array.isArray(this.warmNodeSpecs)) {
      $dara.Model.validateArray(this.warmNodeSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionalInstanceConfigResponseBody extends $dara.Model {
  requestId?: string;
  result?: GetRegionalInstanceConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetRegionalInstanceConfigResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


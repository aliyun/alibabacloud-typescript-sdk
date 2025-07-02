// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DoubleMetric } from "./DoubleMetric";
import { IntegerMetric } from "./IntegerMetric";


export class ResourceSummary extends $dara.Model {
  inefficientTaskRate?: DoubleMetric;
  memoryUtilizationRate?: DoubleMetric;
  originalTotalVcore?: IntegerMetric;
  vcoreUtilizationRate?: DoubleMetric;
  static names(): { [key: string]: string } {
    return {
      inefficientTaskRate: 'InefficientTaskRate',
      memoryUtilizationRate: 'MemoryUtilizationRate',
      originalTotalVcore: 'OriginalTotalVcore',
      vcoreUtilizationRate: 'VcoreUtilizationRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inefficientTaskRate: DoubleMetric,
      memoryUtilizationRate: DoubleMetric,
      originalTotalVcore: IntegerMetric,
      vcoreUtilizationRate: DoubleMetric,
    };
  }

  validate() {
    if(this.inefficientTaskRate && typeof (this.inefficientTaskRate as any).validate === 'function') {
      (this.inefficientTaskRate as any).validate();
    }
    if(this.memoryUtilizationRate && typeof (this.memoryUtilizationRate as any).validate === 'function') {
      (this.memoryUtilizationRate as any).validate();
    }
    if(this.originalTotalVcore && typeof (this.originalTotalVcore as any).validate === 'function') {
      (this.originalTotalVcore as any).validate();
    }
    if(this.vcoreUtilizationRate && typeof (this.vcoreUtilizationRate as any).validate === 'function') {
      (this.vcoreUtilizationRate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


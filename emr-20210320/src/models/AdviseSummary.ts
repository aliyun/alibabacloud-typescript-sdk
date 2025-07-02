// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DoubleMetric } from "./DoubleMetric";


export class AdviseSummary extends $dara.Model {
  memoryUtilizationRate?: DoubleMetric;
  vcoreUtilizationRate?: DoubleMetric;
  static names(): { [key: string]: string } {
    return {
      memoryUtilizationRate: 'MemoryUtilizationRate',
      vcoreUtilizationRate: 'VcoreUtilizationRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memoryUtilizationRate: DoubleMetric,
      vcoreUtilizationRate: DoubleMetric,
    };
  }

  validate() {
    if(this.memoryUtilizationRate && typeof (this.memoryUtilizationRate as any).validate === 'function') {
      (this.memoryUtilizationRate as any).validate();
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


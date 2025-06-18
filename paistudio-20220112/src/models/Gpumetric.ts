// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GPUMetric extends $dara.Model {
  index?: number;
  model?: string;
  /**
   * @example
   * 0：异常；1：正常
   */
  status?: number;
  usageRate?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      model: 'Model',
      status: 'Status',
      usageRate: 'UsageRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      model: 'string',
      status: 'number',
      usageRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


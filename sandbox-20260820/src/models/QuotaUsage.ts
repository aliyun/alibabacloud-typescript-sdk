// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuotaUsage extends $dara.Model {
  /**
   * @remarks
   * 已占用的 CPU 配额，单位为 vCPU，不是 CPU 使用率。
   * 
   * @example
   * 1
   */
  cpuCores?: number;
  /**
   * @remarks
   * 尚未释放的实例授权数量。
   * 
   * @example
   * 1
   */
  instanceCount?: number;
  /**
   * @remarks
   * 已占用的内存配额，单位为 GB，不是进程实际内存。
   * 
   * @example
   * 1.5
   */
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpuCores: 'cpuCores',
      instanceCount: 'instanceCount',
      memoryGB: 'memoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCores: 'number',
      instanceCount: 'number',
      memoryGB: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


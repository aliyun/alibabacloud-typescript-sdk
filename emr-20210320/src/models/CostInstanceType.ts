// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataDisk } from "./DataDisk";
import { SystemDisk } from "./SystemDisk";


export class CostInstanceType extends $dara.Model {
  /**
   * @remarks
   * CPU核数。
   */
  cpu?: number;
  /**
   * @remarks
   * 数据盘列表。
   */
  dataDisks?: DataDisk[];
  /**
   * @remarks
   * 实例类型列表。
   * 
   * @example
   * ["ecs.g6.4xlarge"]
   */
  instanceType?: string;
  /**
   * @remarks
   * 内存大小。
   */
  memory?: number;
  /**
   * @remarks
   * 系统盘信息。
   */
  systemDisk?: SystemDisk;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      dataDisks: 'DataDisks',
      instanceType: 'InstanceType',
      memory: 'Memory',
      systemDisk: 'SystemDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      dataDisks: { 'type': 'array', 'itemType': DataDisk },
      instanceType: 'string',
      memory: 'number',
      systemDisk: SystemDisk,
    };
  }

  validate() {
    if(Array.isArray(this.dataDisks)) {
      $dara.Model.validateArray(this.dataDisks);
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


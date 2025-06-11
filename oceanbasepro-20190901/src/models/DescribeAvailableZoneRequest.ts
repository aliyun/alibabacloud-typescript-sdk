// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableZoneRequest extends $dara.Model {
  /**
   * @example
   * x86
   */
  cpuArch?: string;
  /**
   * @example
   * multiple
   */
  deployType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cluster
   */
  instanceType?: string;
  /**
   * @example
   * 3.2.4.4
   */
  obVersion?: string;
  /**
   * @example
   * normal
   */
  series?: string;
  /**
   * @example
   * oceanbase.cluster.cd8.xlarge
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      cpuArch: 'CpuArch',
      deployType: 'DeployType',
      instanceType: 'InstanceType',
      obVersion: 'ObVersion',
      series: 'Series',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuArch: 'string',
      deployType: 'string',
      instanceType: 'string',
      obVersion: 'string',
      series: 'string',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


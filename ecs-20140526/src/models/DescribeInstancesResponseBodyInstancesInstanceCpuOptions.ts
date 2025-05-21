// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesInstanceCpuOptions extends $dara.Model {
  /**
   * @remarks
   * The number of physical CPU cores.
   * 
   * @example
   * 2
   */
  coreCount?: number;
  enableVISST?: boolean;
  enableVRDT?: boolean;
  /**
   * @remarks
   * >  This parameter is deprecated.
   * 
   * @example
   * 2
   */
  numa?: string;
  /**
   * @remarks
   * The number of threads per CPU core.
   * 
   * @example
   * 2
   */
  threadsPerCore?: number;
  /**
   * @remarks
   * The CPU topology type of the instance. Valid values:
   * 
   * *   ContinuousCoreToHTMapping: Hyper-Threading (HT) continuous CPU topology
   * *   DiscreteCoreToHTMapping: HT discrete CPU topology
   * 
   * @example
   * ContinuousCoreToHTMapping
   */
  topologyType?: string;
  turboMode?: string;
  static names(): { [key: string]: string } {
    return {
      coreCount: 'CoreCount',
      enableVISST: 'EnableVISST',
      enableVRDT: 'EnableVRDT',
      numa: 'Numa',
      threadsPerCore: 'ThreadsPerCore',
      topologyType: 'TopologyType',
      turboMode: 'TurboMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreCount: 'number',
      enableVISST: 'boolean',
      enableVRDT: 'boolean',
      numa: 'string',
      threadsPerCore: 'number',
      topologyType: 'string',
      turboMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


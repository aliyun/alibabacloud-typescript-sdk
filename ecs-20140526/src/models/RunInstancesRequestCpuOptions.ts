// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunInstancesRequestCpuOptions extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores. This parameter cannot be specified but only uses its default value.
   * 
   * For information about the default value, see [Customize CPU options](https://help.aliyun.com/document_detail/145895.html).
   * 
   * @example
   * 2
   */
  core?: number;
  /**
   * @remarks
   * This parameter is no longer used.
   * 
   * @example
   * 1
   */
  numa?: string;
  /**
   * @remarks
   * The number of threads per CPU core. The following formula is used to calculate the number of vCPUs of the instance: `CpuOptions.Core` value × `CpuOptions.ThreadsPerCore` value.
   * 
   * *   If `CpuOptionsThreadPerCore` is set to 1, Hyper-Threading (HT) is disabled.
   * *   This parameter is applicable only to specific instance types.
   * 
   * @example
   * 2
   */
  threadsPerCore?: number;
  /**
   * @remarks
   * The CPU topology type of the instance. Valid values:
   * 
   * *   ContinuousCoreToHTMapping: The HT technology allows continuous threads to run on the same core in the CPU topology of the instance.``
   * *   DiscreteCoreToHTMapping: The HT technology allows discrete threads to run on the same core in the CPU topology of the instance.``
   * 
   * This parameter is empty by default.
   * 
   * >  This parameter is supported only for specific instance families. For more information about the supported instance families, see [View and modify the CPU topology](https://help.aliyun.com/document_detail/2636059.html).
   * 
   * @example
   * DiscreteCoreToHTMapping
   */
  topologyType?: string;
  static names(): { [key: string]: string } {
    return {
      core: 'Core',
      numa: 'Numa',
      threadsPerCore: 'ThreadsPerCore',
      topologyType: 'TopologyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      core: 'number',
      numa: 'string',
      threadsPerCore: 'number',
      topologyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAttributeRequestCpuOptions extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores. This parameter cannot be specified but only uses its default value.
   * 
   * @example
   * 2
   */
  core?: number;
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
   * *   ContinuousCoreToHTMapping: The Hyper-Threading (HT) technology allows continuous threads to run on the same core in the CPU topology of the instance.
   * *   DiscreteCoreToHTMapping: The HT technology allows discrete threads to run on the same core.
   * 
   * This parameter is left empty by default.
   * 
   * Take note of the following items:
   * 
   * *   The instance must be in the Stopped (`Stopped`) state.
   * 
   * >  This parameter is supported only for specific instance families. For information about the supported instance families, see [View and modify CPU topologies](https://help.aliyun.com/document_detail/2636059.html).
   * 
   * @example
   * DiscreteCoreToHTMapping
   */
  topologyType?: string;
  static names(): { [key: string]: string } {
    return {
      core: 'Core',
      threadsPerCore: 'ThreadsPerCore',
      topologyType: 'TopologyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      core: 'number',
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


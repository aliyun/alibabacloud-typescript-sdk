// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateK8sApplicationConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can query the application ID by calling the ListApplication operation. For more information, see [ListApplication](https://help.aliyun.com/document_detail/423162.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 23bf94d9-****-4994-9917-616a827aa777
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the cluster. You can query the cluster ID by calling the ListCluster operation. For more information, see [ListCluster](https://help.aliyun.com/document_detail/411844.html).
   * 
   * @example
   * 9c28bbb9-****-44b3-b953-54ef8a2d0be2
   */
  clusterId?: string;
  /**
   * @remarks
   * The maximum number of CPU cores allowed for each application instance when the application is running. The value 0 indicates that no limit is set on CPU cores.
   * 
   * @example
   * 1
   */
  cpuLimit?: string;
  /**
   * @remarks
   * The number of CPU cores requested for each application instance when the application is running. Unit: cores. We recommend that you set this parameter. The value 0 indicates that no limit is set on CPU cores.
   * 
   * > You must set this parameter together with the CpuLimit parameter. Make sure that the value of this parameter does not exceed that of the CpuLimit parameter.
   * 
   * @example
   * 1
   */
  cpuRequest?: string;
  /**
   * @remarks
   * The maximum size of space required by ephemeral storage. Unit: GB. The value 0 indicates that no limit is set on the ephemeral storage space.
   * 
   * @example
   * 4
   */
  ephemeralStorageLimit?: string;
  /**
   * @remarks
   * The minimum size of space required by ephemeral storage. Unit: GB. The value 0 indicates that no limit is set on the ephemeral storage space.
   * 
   * > You must set this parameter together with the EphemeralStorageLimit parameter. Make sure that the value of this parameter does not exceed that of the EphemeralStorageLimit parameter.
   * 
   * @example
   * 2
   */
  ephemeralStorageRequest?: string;
  /**
   * @remarks
   * The maximum number of CPU cores allowed. The value 0 indicates that no limit is set on CPU cores.
   * 
   * @example
   * 1
   */
  mcpuLimit?: string;
  /**
   * @remarks
   * The minimum number of CPU cores required. Unit: cores. The value 0 indicates that no limit is set on CPU cores.
   * 
   * > You must set this parameter together with the CpuLimit parameter. Make sure that the value of this parameter does not exceed that of the CpuLimit parameter.
   * 
   * @example
   * 1000
   */
  mcpuRequest?: string;
  /**
   * @remarks
   * The maximum size of memory allowed for each application instance when the application is running. Unit: MB. The value 0 indicates that no limit is set on the memory size.
   * 
   * @example
   * 4
   */
  memoryLimit?: string;
  /**
   * @remarks
   * The size of memory requested for each application instance when the application is running. Unit: MB. We recommend that you set this parameter. If you do not want to apply for a memory quota, set this parameter to 0.
   * 
   * > You must set this parameter together with the MemoryLimit parameter. Make sure that the value of this parameter does not exceed that of the MemoryLimit parameter.
   * 
   * @example
   * 400
   */
  memoryRequest?: string;
  /**
   * @remarks
   * The timeout period of the change process. Valid values: 1 to 1800. Default value: 600. Unit: seconds.
   * 
   * @example
   * 60
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clusterId: 'ClusterId',
      cpuLimit: 'CpuLimit',
      cpuRequest: 'CpuRequest',
      ephemeralStorageLimit: 'EphemeralStorageLimit',
      ephemeralStorageRequest: 'EphemeralStorageRequest',
      mcpuLimit: 'McpuLimit',
      mcpuRequest: 'McpuRequest',
      memoryLimit: 'MemoryLimit',
      memoryRequest: 'MemoryRequest',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clusterId: 'string',
      cpuLimit: 'string',
      cpuRequest: 'string',
      ephemeralStorageLimit: 'string',
      ephemeralStorageRequest: 'string',
      mcpuLimit: 'string',
      mcpuRequest: 'string',
      memoryLimit: 'string',
      memoryRequest: 'string',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


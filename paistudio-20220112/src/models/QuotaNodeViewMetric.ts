// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuotaNodeViewMetric extends $dara.Model {
  /**
   * @remarks
   * The CPU utilization.
   * 
   * @example
   * 59
   */
  CPUUsageRate?: string;
  /**
   * @remarks
   * The node import time.
   * 
   * @example
   * 2022-08-25T15:20:56Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The disk read rate.
   * 
   * @example
   * 22
   */
  diskReadRate?: string;
  /**
   * @remarks
   * The disk write rate.
   * 
   * @example
   * 22
   */
  diskWriteRate?: string;
  /**
   * @remarks
   * The GPU model.
   * 
   * @example
   * V100
   */
  GPUType?: string;
  /**
   * @remarks
   * The memory utilization.
   * 
   * @example
   * 20
   */
  memoryUsageRate?: string;
  /**
   * @remarks
   * The network inbound rate.
   * 
   * @example
   * 1
   */
  networkInputRate?: string;
  /**
   * @remarks
   * The network outbound rate.
   * 
   * @example
   * 1
   */
  networkOutputRate?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * -i121212node
   */
  nodeID?: string;
  /**
   * @remarks
   * The node status.
   * 
   * @example
   * Ready
   */
  nodeStatus?: string;
  /**
   * @remarks
   * The GPU type.
   * 
   * @example
   * ecs.g6.large
   */
  nodeType?: string;
  /**
   * @remarks
   * The resource quota ID.
   * 
   * @example
   * quotamtl37ge7gkvdz
   */
  quotaId?: string;
  /**
   * @remarks
   * The used CPU.
   * 
   * @example
   * 100
   */
  requestCPU?: number;
  /**
   * @remarks
   * The used GPU.
   * 
   * @example
   * 10
   */
  requestGPU?: number;
  /**
   * @remarks
   * The used memory.
   * 
   * @example
   * 102400000
   */
  requestMemory?: number;
  /**
   * @remarks
   * The node tasks.
   */
  taskIdMap?: { [key: string]: any };
  /**
   * @remarks
   * The total CPU.
   * 
   * @example
   * 1000
   */
  totalCPU?: number;
  /**
   * @remarks
   * The total GPU.
   * 
   * @example
   * 1
   */
  totalGPU?: number;
  /**
   * @remarks
   * The total memory.
   * 
   * @example
   * 10240
   */
  totalMemory?: number;
  /**
   * @remarks
   * The total number of node tasks.
   * 
   * @example
   * 1
   */
  totalTasks?: number;
  /**
   * @remarks
   * The user list.
   */
  userIDs?: string[];
  /**
   * @remarks
   * The total number of users.
   * 
   * @example
   * 1
   */
  userNumber?: string;
  static names(): { [key: string]: string } {
    return {
      CPUUsageRate: 'CPUUsageRate',
      createdTime: 'CreatedTime',
      diskReadRate: 'DiskReadRate',
      diskWriteRate: 'DiskWriteRate',
      GPUType: 'GPUType',
      memoryUsageRate: 'MemoryUsageRate',
      networkInputRate: 'NetworkInputRate',
      networkOutputRate: 'NetworkOutputRate',
      nodeID: 'NodeID',
      nodeStatus: 'NodeStatus',
      nodeType: 'NodeType',
      quotaId: 'QuotaId',
      requestCPU: 'RequestCPU',
      requestGPU: 'RequestGPU',
      requestMemory: 'RequestMemory',
      taskIdMap: 'TaskIdMap',
      totalCPU: 'TotalCPU',
      totalGPU: 'TotalGPU',
      totalMemory: 'TotalMemory',
      totalTasks: 'TotalTasks',
      userIDs: 'UserIDs',
      userNumber: 'UserNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPUUsageRate: 'string',
      createdTime: 'string',
      diskReadRate: 'string',
      diskWriteRate: 'string',
      GPUType: 'string',
      memoryUsageRate: 'string',
      networkInputRate: 'string',
      networkOutputRate: 'string',
      nodeID: 'string',
      nodeStatus: 'string',
      nodeType: 'string',
      quotaId: 'string',
      requestCPU: 'number',
      requestGPU: 'number',
      requestMemory: 'number',
      taskIdMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      totalCPU: 'number',
      totalGPU: 'number',
      totalMemory: 'number',
      totalTasks: 'number',
      userIDs: { 'type': 'array', 'itemType': 'string' },
      userNumber: 'string',
    };
  }

  validate() {
    if(this.taskIdMap) {
      $dara.Model.validateMap(this.taskIdMap);
    }
    if(Array.isArray(this.userIDs)) {
      $dara.Model.validateArray(this.userIDs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuotaNodeViewMetric extends $dara.Model {
  CPUUsageRate?: string;
  createdTime?: string;
  diskReadRate?: string;
  diskWriteRate?: string;
  GPUType?: string;
  memoryUsageRate?: string;
  networkInputRate?: string;
  networkOutputRate?: string;
  /**
   * @example
   * -i121212node
   */
  nodeID?: string;
  nodeStatus?: string;
  nodeType?: string;
  quotaId?: string;
  requestCPU?: number;
  requestGPU?: number;
  requestMemory?: number;
  taskIdMap?: { [key: string]: any };
  totalCPU?: number;
  totalGPU?: number;
  totalMemory?: number;
  totalTasks?: number;
  userIDs?: string[];
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


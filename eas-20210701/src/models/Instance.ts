// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Instance extends $dara.Model {
  /**
   * @example
   * 0.444
   */
  currentAmount?: number;
  /**
   * @example
   * 192.168.1.100
   */
  externalIP?: string;
  /**
   * @example
   * 8080
   */
  externalInstancePort?: number;
  hostIP?: string;
  hostName?: string;
  innerIP?: string;
  instanceName?: string;
  instancePort?: number;
  /**
   * @example
   * ecs.c7.large
   */
  instanceType?: string;
  /**
   * @example
   * false
   */
  isSpot?: boolean;
  /**
   * @example
   * false
   */
  isolated?: boolean;
  lastState?: { [key: string]: any }[];
  namespace?: string;
  /**
   * @example
   * 2.2
   */
  originalAmount?: number;
  readyProcesses?: number;
  reason?: string;
  /**
   * @example
   * PublicResource
   */
  resourceType?: string;
  restartCount?: number;
  /**
   * @example
   * Standard
   */
  role?: string;
  /**
   * @deprecated
   */
  startAt?: string;
  startTime?: string;
  status?: string;
  /**
   * @example
   * 192.168.0.39
   */
  tenantHostIP?: string;
  /**
   * @example
   * 192.168.0.39
   */
  tenantInstanceIP?: string;
  totalProcesses?: number;
  /**
   * @example
   * cn-shanghai-a
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      currentAmount: 'CurrentAmount',
      externalIP: 'ExternalIP',
      externalInstancePort: 'ExternalInstancePort',
      hostIP: 'HostIP',
      hostName: 'HostName',
      innerIP: 'InnerIP',
      instanceName: 'InstanceName',
      instancePort: 'InstancePort',
      instanceType: 'InstanceType',
      isSpot: 'IsSpot',
      isolated: 'Isolated',
      lastState: 'LastState',
      namespace: 'Namespace',
      originalAmount: 'OriginalAmount',
      readyProcesses: 'ReadyProcesses',
      reason: 'Reason',
      resourceType: 'ResourceType',
      restartCount: 'RestartCount',
      role: 'Role',
      startAt: 'StartAt',
      startTime: 'StartTime',
      status: 'Status',
      tenantHostIP: 'TenantHostIP',
      tenantInstanceIP: 'TenantInstanceIP',
      totalProcesses: 'TotalProcesses',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentAmount: 'number',
      externalIP: 'string',
      externalInstancePort: 'number',
      hostIP: 'string',
      hostName: 'string',
      innerIP: 'string',
      instanceName: 'string',
      instancePort: 'number',
      instanceType: 'string',
      isSpot: 'boolean',
      isolated: 'boolean',
      lastState: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      namespace: 'string',
      originalAmount: 'number',
      readyProcesses: 'number',
      reason: 'string',
      resourceType: 'string',
      restartCount: 'number',
      role: 'string',
      startAt: 'string',
      startTime: 'string',
      status: 'string',
      tenantHostIP: 'string',
      tenantInstanceIP: 'string',
      totalProcesses: 'number',
      zone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.lastState)) {
      $dara.Model.validateArray(this.lastState);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


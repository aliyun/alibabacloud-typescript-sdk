// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCapacityResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Purchased quota for Agent-managed instances.
   * 
   * @example
   * 1
   */
  agentManagedAssetQuota?: number;
  /**
   * @remarks
   * Used quota for Agent-managed instances.
   * 
   * @example
   * 1
   */
  agentManagedAssetUsed?: number;
  /**
   * @remarks
   * Indicates whether the LogStore for threat analysis exists.
   * 
   * - true: Logs are normal and log analysis is available.
   * 
   * - false: Logs are being cleaned up and log analysis is unavailable.
   * 
   * @example
   * true
   */
  existLogStore?: boolean;
  /**
   * @remarks
   * Purchased storage capacity for threat analysis, in GB.
   * 
   * @example
   * 9000
   */
  preservedCapacity?: number;
  /**
   * @remarks
   * Current billable storage usage for threat analysis, in GB.
   * 
   * @example
   * 10
   */
  usedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      agentManagedAssetQuota: 'AgentManagedAssetQuota',
      agentManagedAssetUsed: 'AgentManagedAssetUsed',
      existLogStore: 'ExistLogStore',
      preservedCapacity: 'PreservedCapacity',
      usedCapacity: 'UsedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentManagedAssetQuota: 'number',
      agentManagedAssetUsed: 'number',
      existLogStore: 'boolean',
      preservedCapacity: 'number',
      usedCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCapacityResponseBody extends $dara.Model {
  /**
   * @remarks
   * Storage capacity details.
   */
  data?: GetCapacityResponseBodyData;
  /**
   * @remarks
   * ID of the request.
   * 
   * @example
   * 27D27DCB-D76B-5064-8B3B-0900DEF7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetCapacityResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


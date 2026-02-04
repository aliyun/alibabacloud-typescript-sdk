// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTairKVCacheCustomInstanceHistoryMonitorValuesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-09-20T00:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * {\\"extend\\":{\\"workers\\":\\"avg_dispatchers\\"}}
   */
  express?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tc-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @example
   * 1000
   */
  length?: string;
  /**
   * @example
   * CPUUtilization
   */
  metricName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * 60
   */
  period?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-09-05T08:49:27Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      express: 'Express',
      instanceId: 'InstanceId',
      length: 'Length',
      metricName: 'MetricName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      express: 'string',
      instanceId: 'string',
      length: 'string',
      metricName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


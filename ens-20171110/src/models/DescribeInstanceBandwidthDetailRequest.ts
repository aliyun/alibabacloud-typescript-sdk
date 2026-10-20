// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceBandwidthDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. The maximum difference from the start time is 86400 seconds. The query range is left-closed and right-open. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-01-11 30:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The ENS node ID.
   * 
   * @example
   * cn-beijing-cmcc
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-6ecpqvkicnchxccozrpxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type, such as vm, eip, single_tenant, or nc. You can leave this parameter empty if no special query is required.
   * 
   * @example
   * vm
   */
  instanceType?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 200.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The service type, such as vm, eip, esk, or meta.
   * 
   * @example
   * vm
   */
  serviceType?: string;
  /**
   * @remarks
   * The start time in the yyyy-MM-dd HH:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-01-11 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      serviceType: 'ServiceType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ensRegionId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      serviceType: 'string',
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

